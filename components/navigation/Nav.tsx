"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Alumni",
		path: "/alumni",
	},
	{
		name: "Association",
		path: "/association",
	},
	{
		name: "Media",
		path: "/media",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

const Nav: React.FC = () => {
	const pathname = usePathname();
	return (
		<main>
			<div>
				<nav className={`flex gap-8`}>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={`${
								link.path === pathname &&
								"text-yellow-500 dark:text-[#00ff99] border-b-2 border-[#FFD700] dark:border-[#00ff99]"
							} font-medium hover:text-yellow-500 dark:hover:text-[#00ff99]`}>
							{link.name}
						</Link>
					))}
				</nav>
			</div>
		</main>
	);
};

export default Nav;
