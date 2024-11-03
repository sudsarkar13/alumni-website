import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Faculty | Alumni Portal",
  description: "Meet our distinguished faculty members and academic departments.",
}

const FacultyPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default FacultyPageLayout;