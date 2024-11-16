import { NextResponse } from 'next/server';
import { z } from 'zod';

// Type definitions
interface MediaItem {
  id: number;
  title: string;
  category: string;
  year: string;
  url: string;
  thumbnail?: string;
  description?: string;
  views: number;
  downloads: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'archived' | 'pending';
  fileSize: number;
  fileType: 'image' | 'video' | 'document';
  metadata?: Record<string, any>;
}

interface MediaData {
  photos: MediaItem[];
  videos: MediaItem[];
  documents: MediaItem[];
  news: MediaItem[];
}

// Validation schemas with more specific constraints
const MediaItemSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  category: z.enum(["events", "campus", "sports", "academic", "cultural", "graduation"]),
  year: z.string().regex(/^\d{4}$/, "Invalid year format"),
  url: z.string().url("Invalid URL"),
  thumbnail: z.string().url("Invalid thumbnail URL").optional(),
  description: z.string().min(10, "Description must be at least 10 characters").max(500).optional(),
  views: z.number().min(0).default(0),
  downloads: z.number().min(0).default(0),
  tags: z.array(z.string().min(2).max(20)).max(10).optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  status: z.enum(["active", "archived", "pending"]).default("active"),
  fileSize: z.number().min(0),
  fileType: z.enum(["image", "video", "document"]),
  metadata: z.record(z.string(), z.any()).optional(),
});

// Mock database
const mediaData: MediaData = {
  photos: [],
  videos: [],
  documents: [],
  news: []
};

// Helper function to validate and sanitize search parameters
const validateSearchParams = (searchParams: URLSearchParams) => {
  const page = Math.max(1, Math.min(100, parseInt(searchParams.get('page') || '1')));
  const limit = Math.max(1, Math.min(50, parseInt(searchParams.get('limit') || '10')));
  const type = searchParams.get('type') || 'all';
  const search = searchParams.get('search')?.toLowerCase().trim();
  const category = searchParams.get('category')?.toLowerCase().trim();
  const year = searchParams.get('year')?.trim();
  const tag = searchParams.get('tag')?.toLowerCase().trim();
  const status = searchParams.get('status') || 'active';
  const sortBy = ['date', 'views', 'downloads', 'title'].includes(searchParams.get('sortBy') || '')
    ? searchParams.get('sortBy')
    : 'date';
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

  return { page, limit, type, search, category, year, tag, status, sortBy, sortOrder };
};

// Helper function to filter media items
const filterMediaItems = (items: MediaItem[], params: ReturnType<typeof validateSearchParams>) => {
  return items.filter(item => {
    const searchTerm = params.search || '';
    const matchesSearch = !params.search || 
      item.title.toLowerCase().includes(searchTerm) ||
      (item.description?.toLowerCase() || '').includes(searchTerm) ||
      (item.tags || []).some(tag => tag.toLowerCase().includes(searchTerm));

    const categoryTerm = params.category || '';
    const matchesCategory = !params.category || 
      item.category.toLowerCase() === categoryTerm;

    const matchesYear = !params.year || item.year === params.year;

    const tagTerm = params.tag || '';
    const matchesTag = !params.tag ||
      (item.tags || []).some(tag => tag.toLowerCase() === tagTerm);

    return matchesSearch && matchesCategory && matchesYear && matchesTag;
  });
};

// Helper function to sort media items
const sortMediaItems = (items: MediaItem[], sortBy: string, sortOrder: string) => {
  return [...items].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'date':
        comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        break;
      case 'views':
        comparison = b.views - a.views;
        break;
      case 'downloads':
        comparison = b.downloads - a.downloads;
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      default:
        comparison = 0;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

// Helper function for error responses
const errorResponse = (message: string, status: number = 400) => {
  return NextResponse.json(
    { success: false, message },
    { status }
  );
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = validateSearchParams(searchParams);

    // Validate media type
    if (params.type !== 'all' && !(params.type in mediaData)) {
      return errorResponse('Invalid media type', 400);
    }

    const result: Partial<MediaData> = {};
    const types = params.type === 'all' ? Object.keys(mediaData) : [params.type];

    // Process each media type
    types.forEach(mediaType => {
      let items = [...mediaData[mediaType as keyof MediaData]];

      // Filter by status
      items = items.filter(item => item.status === params.status);

      // Apply search filters
      if (params.search || params.category || params.year || params.tag) {
        items = filterMediaItems(items, params);
      }

      // Apply sorting
      items = sortMediaItems(items, params.sortBy!, params.sortOrder);

      // Apply pagination
      const startIndex = (params.page - 1) * params.limit;
      const paginatedItems = items.slice(startIndex, startIndex + params.limit);

      result[mediaType as keyof MediaData] = paginatedItems;
    });

    return NextResponse.json({
      success: true,
      data: result,
      pagination: {
        page: params.page,
        limit: params.limit,
        total: Object.values(result).flat().length,
        totalPages: Math.ceil(Object.values(result).flat().length / params.limit)
      },
      meta: {
        categories: [...new Set(Object.values(mediaData).flat().map(item => item.category))],
        tags: [...new Set(Object.values(mediaData).flat().map(item => item.tags || []).flat())],
        years: [...new Set(Object.values(mediaData).flat().map(item => 
          'year' in item ? item.year : new Date(item.createdAt).getFullYear().toString()
        ))],
        totalItems: Object.values(mediaData).flat().length
      }
    });

  } catch (error) {
    console.error('Media GET error:', error);
    return errorResponse('Failed to fetch media data', 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, item } = body;

    // Validate media type
    if (!type || !['photos', 'videos', 'documents'].includes(type)) {
      return errorResponse('Invalid media type. Must be one of: photos, videos, documents');
    }

    // Validate item data
    try {
      const validatedItem = await MediaItemSchema.parseAsync({
        ...item,
        createdAt: item.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      const newItem: MediaItem = {
        id: Date.now(),
        ...validatedItem,
        createdAt: validatedItem.createdAt || new Date().toISOString(),
        updatedAt: validatedItem.updatedAt || new Date().toISOString()
      };

      mediaData[type as keyof MediaData].push(newItem);

      return NextResponse.json({
        success: true,
        data: newItem
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return errorResponse(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`, 400);
      }
      throw error;
    }

  } catch (error) {
    console.error('Media POST error:', error);
    return errorResponse('Failed to add media item', 500);
  }
} 