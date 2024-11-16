import { NextResponse } from 'next/server';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  summary?: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
  views: number;
  featured: boolean;
}

// Mock data - Replace with your database implementation
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Alumni Achievement Awards 2024",
    content: "We are proud to announce the recipients of this year's Alumni Achievement Awards...",
    summary: "Celebrating excellence in our alumni community",
    category: "Awards",
    author: "Alumni Association",
    date: "2024-03-15",
    image: "/news/achievement-awards-2024.jpg",
    tags: ["awards", "achievement", "alumni"],
    views: 1250,
    featured: true
  },
  // Add more news items...
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search')?.toLowerCase();
    const tag = searchParams.get('tag');
    const featured = searchParams.get('featured') === 'true';
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const sortBy = searchParams.get('sortBy') || 'date';

    let filteredNews = [...newsData];

    // Apply filters
    if (category) {
      filteredNews = filteredNews.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      filteredNews = filteredNews.filter(item => 
        item.title.toLowerCase().includes(search) ||
        item.content.toLowerCase().includes(search) ||
        item.summary?.toLowerCase().includes(search) ||
        item.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    if (tag) {
      filteredNews = filteredNews.filter(item => 
        item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }

    if (featured) {
      filteredNews = filteredNews.filter(item => item.featured);
    }

    // Sort news items
    filteredNews.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const paginatedNews = filteredNews.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      success: true,
      data: paginatedNews,
      pagination: {
        page,
        limit,
        total: filteredNews.length,
        totalPages: Math.ceil(filteredNews.length / limit)
      },
      meta: {
        categories: [...new Set(newsData.map(item => item.category))],
        tags: [...new Set(newsData.flatMap(item => item.tags))]
      }
    });

  } catch (error) {
    console.error('News GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, category, author, tags } = body;

    // Validate required fields
    if (!title || !content || !category || !author) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new news item
    const newNews: NewsItem = {
      id: Date.now(),
      title,
      content,
      category,
      author,
      date: new Date().toISOString(),
      tags: tags || [],
      views: 0,
      featured: false
    };

    newsData.push(newNews);

    return NextResponse.json({
      success: true,
      data: newNews
    });

  } catch (error) {
    console.error('News POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create news item' },
      { status: 500 }
    );
  }
} 