"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Administration",
		path: "/administration",
	},
	{
		name: "Faculty",
		path: "/faculty",
	},
	{
		name: "Alumni",
		path: "/alumni",
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
