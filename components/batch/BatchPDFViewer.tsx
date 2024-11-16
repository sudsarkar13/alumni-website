import { PDFViewer } from '@react-pdf/renderer';

export default function BatchPDFViewer({ batchYear, pdfUrl }) {
  return (
    <div className="w-full h-screen">
      <PDFViewer url={pdfUrl} />
    </div>
  );
} 