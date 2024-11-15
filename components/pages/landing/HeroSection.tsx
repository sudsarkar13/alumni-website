"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	ArrowRight,
	GraduationCap,
	Users,
	Calendar,
	Globe2,
} from "lucide-react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";

const quickStats = [
	{
		icon: GraduationCap,
		label: "Global Alumni",
		value: "50,000+",
		description: "Graduates worldwide",
	},
	{
		icon: Globe2,
		label: "Countries",
		value: "120+",
		description: "International presence",
	},
	{
		icon: Calendar,
		label: "Annual Events",
		value: "200+",
		description: "Networking opportunities",
	},
];

export function HeroSection() {
	return (
		<section className="relative w-full overflow-hidden bg-dot-pattern min-h-[calc(100vh-4rem)]">
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

			{/* Blur Elements */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 dark:bg-[#00ff99]/20 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />

			<div className="container relative mx-auto px-4 py-12 lg:py-20 min-h-[calc(100vh-4rem)] flex items-center">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
					{/* Left Content */}
					<div className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-full w-fit">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 dark:bg-[#00ff99] opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 dark:bg-[#00ff99]"></span>
							</span>
							<span className="text-sm font-medium">
								Join our growing community
							</span>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-4 lg:space-y-6">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
								Your{" "}
								<span className="text-yellow-500 dark:text-[#00ff99]">
									Alumni
								</span>{" "}
								Network,
								<br className="hidden sm:block" />
								Your Global Community
							</h1>
							<p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
								Connect with fellow graduates, access exclusive opportunities,
								and be part of a thriving professional network.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-col sm:flex-row gap-4">
							<ShimmerButton className="shadow-2xl w-full sm:w-auto">
								<span className="flex items-center justify-center gap-2 text-base text-white font-medium">
									Get Started
									<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
								</span>
							</ShimmerButton>
							<Button
								size="lg"
								variant="outline"
								className="text-base w-full sm:w-auto">
								Explore Events
							</Button>
						</motion.div>

						{/* Stats Grid */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
							{quickStats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
									className="group p-4 space-y-2 rounded-xl transition-colors hover:bg-muted/50 border">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-yellow-500/10 dark:bg-[#00ff99]/10 text-yellow-500 dark:text-[#00ff99] group-hover:bg-yellow-500/20 dark:group-hover:bg-[#00ff99]/20">
											<stat.icon className="h-5 w-5" />
										</div>
										<span className="text-sm font-medium">{stat.label}</span>
									</div>
									<div>
										<p className="text-2xl lg:text-3xl font-bold">
											{stat.value}
										</p>
										<p className="text-sm text-muted-foreground">
											{stat.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Right Image Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[600px]">
						<div className="absolute inset-0 rounded-2xl overflow-hidden">
							<Image
								// src="https://images.pexels.com/photos/7092614/pexels-photo-7092614.jpeg"
								src="/assets/images/KVS-ALumni-Meet.jpeg"
								alt="Students celebrating graduation"
								fill
								className="object-cover"
								priority
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
						</div>

						{/* Floating Cards - Hidden on Mobile */}
						<div className="hidden lg:block absolute -left-12 bottom-32 bg-background/90 backdrop-blur-sm p-6 rounded-xl border shadow-lg max-w-[300px] transform transition-transform hover:scale-105">
							<div className="flex items-center gap-3 mb-3">
								<div className="p-2 rounded-lg bg-yellow-500/10 dark:bg-[#00ff99]/10">
									<Calendar className="h-5 w-5 text-yellow-500 dark:text-[#00ff99]" />
								</div>
								<p className="text-sm font-medium">Upcoming Event</p>
							</div>
							<h3 className="font-semibold text-lg mb-2">
								Annual Alumni Meetup 2024
							</h3>
							<p className="text-sm text-muted-foreground">
								Join us for an exciting day of networking, workshops, and
								celebration!
							</p>
						</div>

						<div className="hidden lg:block absolute -right-6 top-20 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-xl border shadow-lg transform transition-transform hover:scale-105">
							<div className="flex items-center gap-3">
								<Users className="h-5 w-5 text-yellow-500 dark:text-[#00ff99]" />
								<p className="text-sm font-medium">
									500+ members joined this week
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
