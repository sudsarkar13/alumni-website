import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Faculty | Alumni Portal",
  description: "Meet our faculty and their achievements.",
}

const FacultyPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default FacultyPageLayout;