import { NextResponse } from 'next/server';

// Types for better type safety
interface Document {
  id: number;
  title: string;
  type: 'yearbook' | 'gallery' | 'directory' | 'other';
  size: string;
  url?: string;
  createdAt?: string;
}

interface AlumniData {
  id: number;
  name: string;
  role: string;
  company: string;
  email?: string;
  batch?: string;
  profileImage?: string;
}

interface BatchData {
  [key: string]: {
    totalStudents: number;
    documents: Document[];
    alumni: AlumniData[];
  };
}

// Mock data - Replace with your database implementation
const batchData: BatchData = {
  "2023": {
    totalStudents: 150,
    documents: [
      { 
        id: 1, 
        title: "Yearbook 2023", 
        type: "yearbook", 
        size: "15.2 MB",
        url: "/documents/yearbook-2023.pdf",
        createdAt: "2023-12-31"
      },
      { 
        id: 2, 
        title: "Graduation Photos", 
        type: "gallery", 
        size: "125 MB",
        url: "/documents/graduation-photos-2023.zip",
        createdAt: "2023-12-15"
      }
    ],
    alumni: [
      { 
        id: 1, 
        name: "John Doe", 
        role: "Software Engineer", 
        company: "Google",
        email: "john.doe@gmail.com",
        batch: "2023",
        profileImage: "/profiles/john-doe.jpg"
      }
    ]
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');
    const search = searchParams.get('search')?.toLowerCase();
    const type = searchParams.get('type');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    let result = { ...batchData };

    // Filter by year
    if (year) {
      if (!batchData[year]) {
        return NextResponse.json(
          { success: false, message: 'Batch not found' },
          { status: 404 }
        );
      }
      result = { [year]: batchData[year] };
    }

    // Apply search filter
    if (search) {
      Object.keys(result).forEach(batchYear => {
        result[batchYear] = {
          ...result[batchYear],
          documents: result[batchYear].documents.filter(doc => 
            doc.title.toLowerCase().includes(search)
          ),
          alumni: result[batchYear].alumni.filter(alum => 
            alum.name.toLowerCase().includes(search) ||
            alum.company.toLowerCase().includes(search) ||
            alum.role.toLowerCase().includes(search)
          )
        };
      });
    }

    // Filter documents by type
    if (type) {
      Object.keys(result).forEach(batchYear => {
        result[batchYear] = {
          ...result[batchYear],
          documents: result[batchYear].documents.filter(doc => doc.type === type)
        };
      });
    }

    // Apply pagination
    Object.keys(result).forEach(batchYear => {
      const startIndex = (page - 1) * limit;
      result[batchYear] = {
        ...result[batchYear],
        documents: result[batchYear].documents.slice(startIndex, startIndex + limit),
        alumni: result[batchYear].alumni.slice(startIndex, startIndex + limit)
      };
    });

    return NextResponse.json({ 
      success: true, 
      data: result,
      pagination: {
        page,
        limit,
        total: Object.keys(result).reduce((acc, year) => 
          acc + result[year].alumni.length, 0
        )
      }
    });

  } catch (error) {
    console.error('Batch GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch batch data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { year, document } = body;

    // Validate request
    if (!year || !document) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate document type
    if (!['yearbook', 'gallery', 'directory', 'other'].includes(document.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid document type' },
        { status: 400 }
      );
    }

    // Create batch if it doesn't exist
    if (!batchData[year]) {
      batchData[year] = { totalStudents: 0, documents: [], alumni: [] };
    }

    const newDocument: Document = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...document
    };

    batchData[year].documents.push(newDocument);

    return NextResponse.json({ 
      success: true, 
      data: newDocument 
    });

  } catch (error) {
    console.error('Batch POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to add document' },
      { status: 500 }
    );
  }
} 