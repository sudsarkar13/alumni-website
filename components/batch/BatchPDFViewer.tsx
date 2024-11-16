"use client";

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BatchPDFViewerProps {
  batchYear: string;
  pdfUrl: string;
}

export default function BatchPDFViewer({ batchYear, pdfUrl }: BatchPDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(800);

  useEffect(() => {
    const updatePageWidth = () => {
      const containerWidth = window.innerWidth * 0.9; // 90% of viewport width
      setPageWidth(Math.min(containerWidth, 1200)); // Max width of 1200px
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    setError('Failed to load PDF document');
    setLoading(false);
    console.error('PDF load error:', error);
  }

  return (
    <div className="w-full flex flex-col items-center bg-background/95 rounded-lg shadow-lg">
      <div className="w-full flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Batch {batchYear} Directory</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Page {pageNumber} of {numPages}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPageNumber(page => Math.max(1, page - 1))}
              disabled={pageNumber <= 1 || loading}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
              disabled={pageNumber >= numPages || loading}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-auto p-4">
        {error ? (
          <div className="text-destructive text-center py-8">{error}</div>
        ) : (
          <div className="flex justify-center">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                }
              />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
} 