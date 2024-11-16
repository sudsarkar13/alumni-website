export default function AlumniBatchDirectory() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-8">
          <BatchSelector />
          <AlumniGrid />
          <BatchPDFDownload />
        </div>
      </div>
    </section>
  );
} 