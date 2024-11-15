import Link from "next/link";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ShimmerButton from "@/components/ui/shimmer-button";

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-2xl font-bold">
						KVS{" "}
						<span className="text-yellow-500 dark:text-[#00ff99]">Alumni</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden lg:block">
					<Nav />
				</div>

				{/* Actions */}
				<div className="flex items-center space-x-4">
					<div className="hidden lg:flex md:items-center md:space-x-4">
						<ShimmerButton className="shadow-2xl">
							<span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
								Join Network
							</span>
						</ShimmerButton>
					</div>
					<ThemeToggle />

					{/* Mobile Menu */}
					<div className="lg:hidden">
						<MobileNav />
					</div>
				</div>
			</nav>
		</header>
	);
}
