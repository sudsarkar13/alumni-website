import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alumni | Alumni Portal",
  description: "Meet our alumni and their achievements.",
}

const AlumniPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default AlumniPageLayout;