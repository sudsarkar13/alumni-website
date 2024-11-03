'use client';

import ContactHero from '@/components/pages/contacts/contact-hero';
import ContactCards from '@/components/pages/contacts/contact-cards';
import ContactForm from '@/components/pages/contacts/contact-form';
import ContactInfo from '@/components/pages/contacts/contact-info';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactCards />
      
      {/* Form and Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}