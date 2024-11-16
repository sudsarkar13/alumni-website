export default function DonationSection() {
  return (
    <section className="py-16">
      <div className="container">
        <DonationForm />
        <PaymentIntegration />
        <DonationHistory />
        <FinancialReports />
      </div>
    </section>
  );
} 