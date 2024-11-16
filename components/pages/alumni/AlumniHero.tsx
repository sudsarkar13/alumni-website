"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AlumniHero() {
	const containerRef = useRef(null);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 300], [0, -50]);

	return (
		<section
			ref={containerRef}
			className="relative h-[90vh] overflow-hidden bg-gradient-to-b from-white to-zinc-100 dark:from-[#0B1120] dark:to-[#0B1120]">
			{/* Enhanced Gradient Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 animate-gradient-shift" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-grid-spin opacity-30" />
			</div>

			{/* Animated Gradient Orbs - Light/Dark Mode Variants */}
			<motion.div
				className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 blur-3xl"
				animate={{
					x: [0, -100, 0],
					y: [20, -20, 20],
					scale: [1, 1.2, 1],
					rotate: [360, 180, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "linear",
				}}
			/>

			{/* Content Container */}
			<div className="relative container h-full flex items-center justify-center z-10">
				<motion.div
					className="max-w-4xl mx-auto text-center space-y-8"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					{/* Enhanced Title */}
					<motion.div className="space-y-4">
						<motion.span
							className="inline-block text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-transparent bg-clip-text animate-gradient-x"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}>
							Welcome to
						</motion.span>
						<motion.h1
							className="text-5xl/tight sm:text-6xl/tight md:text-7xl/tight lg:text-8xl/tight font-bold text-zinc-800 dark:text-white"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}>
							The Alumni{" "}
							<span className="relative inline-block">
								<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 animate-gradient-x">
									Network
								</span>
								<motion.span
									className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 blur-2xl -z-10"
									animate={{
										opacity: [0.5, 0.8, 0.5],
										scale: [0.8, 1.2, 0.8],
									}}
									transition={{ duration: 3, repeat: Infinity }}
								/>
							</span>
						</motion.h1>
						{/* Enhanced Paragraph with Hover Reveal */}
						<motion.div
							className="relative mt-6 group"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}>
							{/* Background Effects */}
							<motion.span
								className="absolute -inset-x-6 -inset-y-2 z-0 bg-gradient-to-r from-indigo-100/50 via-purple-100/50 to-pink-100/50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"
								initial={false}
								animate={{ scale: [0.9, 1], opacity: [0, 1] }}
							/>
							<motion.span className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							{/* Text Content */}
							<motion.p className="relative z-10 text-xl text-zinc-600/90 dark:text-zinc-400/90 max-w-2xl mx-auto leading-relaxed group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-300">
								Connect with fellow graduates and unlock new opportunities in
								our thriving community
							</motion.p>

							{/* Bottom Gradient Line */}
							<div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</motion.div>
					</motion.div>

					{/* Enhanced Buttons */}
					<motion.div
						className="flex flex-wrap justify-center gap-6 mt-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						{/* Primary Button */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-lg opacity-70 blur group-hover:opacity-100 transition duration-200" />
							<Button
								size="lg"
								className="relative h-14 px-8 text-lg font-medium bg-white dark:bg-background/80 hover:bg-zinc-100 dark:hover:bg-background/60 text-zinc-800 dark:text-white transition-all duration-200">
								<span className="relative z-10 bg-gradient-to-r from-zinc-800 to-zinc-800 dark:from-white dark:to-white bg-clip-text group-hover:text-transparent">
									Join Network
								</span>
								<motion.div
									className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
									initial={false}
									animate={{ scale: [0.8, 1], opacity: [0, 1] }}
									exit={{ scale: 0.8, opacity: 0 }}
								/>
							</Button>
						</motion.div>

						{/* Secondary Button */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 rounded-lg opacity-40 blur group-hover:opacity-70 transition duration-200" />
							<Button
								size="lg"
								variant="outline"
								className="relative h-14 px-8 text-lg font-medium border-2 border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-background/20 hover:bg-zinc-100/80 dark:hover:bg-background/40 text-zinc-800 dark:text-white transition-all duration-200">
								<span className="relative z-10">Explore Events</span>
								<motion.div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-pink-500/20 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-200" />
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Enhanced Bottom Gradient Line */}
			<div className="absolute bottom-0 left-0 right-0">
				<motion.div
					className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 dark:via-blue-500/50 to-transparent"
					style={{ y }}
				/>
				<motion.div
					className="h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
					animate={{
						opacity: [0.3, 0.6, 0.3],
						scaleX: [0.8, 1.2, 0.8],
					}}
					transition={{ duration: 3, repeat: Infinity }}
				/>
			</div>
		</section>
	);
}
