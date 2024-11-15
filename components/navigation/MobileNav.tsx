"use client";

import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { links } from "./Nav";
import ShimmerButton from "@/components/ui/shimmer-button";

const MobileNav: React.FC = () => {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className={`flex justify-center items-center`}>
				<MenuIcon className={`text-[32px] text-primary`} />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle></SheetTitle>
				<SheetDescription></SheetDescription>
				{/* logo */}
				<div className={`mt-10 mb-16 text-center`}>
					<Link href={`/`} onClick={() => setOpen(false)}>
						<h1 className={`text-2xl font-semibold`}>
							Logo<span className={`text-[#FFD700]`}>.</span>
						</h1>
					</Link>
				</div>
				<nav className={`flex flex-col justify-center items-center gap-8`}>
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								onClick={() => setOpen(false)}
								className={`${
									link.path === pathname &&
									"text-yellow-500 dark:text-[#00ff99] border-b-2 border-[#FFD700] dark:border-[#00ff99]"
								} font-medium hover:text-yellow-500 dark:hover:text-[#00ff99]`}>
								{link.name}
							</Link>
						);
					})}
					<Link href="#" onClick={() => setOpen(false)}>
						<ShimmerButton className={`shadow-2xl`}>
							<span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
								Join your peers
							</span>
						</ShimmerButton>
					</Link>
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
