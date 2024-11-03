import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Administration | Alumni Portal",
  description: "Meet our administrative team and leadership.",
}

const AdministrationPageLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<main>
			<div>{children}</div>
		</main>
	);
};

export default AdministrationPageLayout;
