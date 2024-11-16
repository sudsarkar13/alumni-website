import { NextResponse } from 'next/server';

// Mock data - Replace with your database implementation
const batchData = {
  "2023": {
    totalStudents: 150,
    documents: [
      { id: 1, title: "Yearbook 2023", type: "yearbook", size: "15.2 MB" },
      { id: 2, title: "Graduation Photos", type: "gallery", size: "125 MB" }
    ],
    alumni: [
      { id: 1, name: "John Doe", role: "Software Engineer", company: "Google" },
      // ... more alumni
    ]
  },
  // ... more batch years
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');
    const search = searchParams.get('search');
    const type = searchParams.get('type');

    let result = { ...batchData };

    if (year) {
      result = { [year]: batchData[year] };
    }

    if (search) {
      // Filter documents and alumni based on search term
      Object.keys(result).forEach(batchYear => {
        result[batchYear].documents = result[batchYear].documents.filter(
          doc => doc.title.toLowerCase().includes(search.toLowerCase())
        );
        result[batchYear].alumni = result[batchYear].alumni.filter(
          alum => alum.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    if (type) {
      // Filter documents by type
      Object.keys(result).forEach(batchYear => {
        result[batchYear].documents = result[batchYear].documents.filter(
          doc => doc.type === type
        );
      });
    }

    return NextResponse.json({ 
      success: true, 
      data: result 
    });

  } catch (error) {
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

    // Add document to batch
    if (!batchData[year]) {
      batchData[year] = { totalStudents: 0, documents: [], alumni: [] };
    }

    const newDocument = {
      id: Date.now(),
      ...document
    };

    batchData[year].documents.push(newDocument);

    return NextResponse.json({ 
      success: true, 
      data: newDocument 
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add document' },
      { status: 500 }
    );
  }
} 