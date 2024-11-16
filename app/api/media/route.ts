import { NextResponse } from 'next/server';

// Mock data - Replace with your database/storage implementation
const mediaData = {
  photos: [
    {
      id: 1,
      url: "https://example.com/photo1.jpg",
      title: "Alumni Meet 2023",
      category: "Events",
      year: "2023"
    }
    // ... more photos
  ],
  videos: [
    {
      id: 1,
      url: "https://example.com/video1.mp4",
      thumbnail: "https://example.com/thumb1.jpg",
      title: "Campus Tour",
      category: "Campus",
      year: "2023"
    }
    // ... more videos
  ],
  news: [
    {
      id: 1,
      title: "Alumni Achievement",
      content: "Lorem ipsum...",
      category: "Achievement",
      date: "2024-03-15"
    }
    // ... more news
  ]
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const year = searchParams.get('year');

    let result = {};

    // Filter by media type
    if (type === 'all') {
      result = { ...mediaData };
    } else {
      result = { [type]: mediaData[type] };
    }

    // Apply filters
    Object.keys(result).forEach(mediaType => {
      let filtered = result[mediaType];

      if (search) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (category) {
        filtered = filtered.filter(item => 
          item.category === category
        );
      }

      if (year) {
        filtered = filtered.filter(item => 
          item.year === year
        );
      }

      result[mediaType] = filtered;
    });

    return NextResponse.json({ 
      success: true, 
      data: result 
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch media data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, media } = body;

    if (!type || !media) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newMedia = {
      id: Date.now(),
      ...media
    };

    mediaData[type].push(newMedia);

    return NextResponse.json({ 
      success: true, 
      data: newMedia 
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add media' },
      { status: 500 }
    );
  }
} 