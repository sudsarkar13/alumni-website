import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Alumni Portal",
  description: "Get in touch with us.",
}

const ContactPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default ContactPageLayout;