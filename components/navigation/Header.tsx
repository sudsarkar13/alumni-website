import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import Nav from "./Nav";
import { ThemeToggle } from "@/components/themes/theme-toggle";

const Header: React.FC = () => {
	return (
		<main>
			<header className={`py-8 xl:py-12 text-black dark:text-white`}>
				<div className={`container mx-auto flex justify-between`}>
					{/* logo */}
					<Link href="/">
						<h1 className={`text-4xl font-semibold`}>
							Logo<span className={`text-[#FFD700]`}>.</span>
						</h1>
					</Link>
					{/* desktop nav */}
					<div className={`hidden lg:flex items-center gap-8`}>
						<Nav />
						<Link href="#">
							<ShimmerButton className={`shadow-2xl`}>
								<span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
									Join your peers
								</span>
							</ShimmerButton>
						</Link>
						<ThemeToggle />
					</div>
					{/* mobile nav */}
				</div>
			</header>
		</main>
	);
};

export default Header;
