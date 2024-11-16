"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import {
	LinkedinIcon,
	TwitterIcon,
	GlobeIcon,
	SearchIcon,
	Sparkles,
} from "lucide-react";

const alumniProfiles = [
	{
		name: "Sarah Johnson",
		graduation: "2019",
		department: "Computer Science",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80",
		role: "Software Engineer",
		company: "Google",
		social: {
			linkedin: "#",
			twitter: "#",
			website: "#",
		},
	},
	{
		name: "Michael Chen",
		graduation: "2018",
		department: "Business Administration",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80",
		role: "Senior Consultant",
		company: "Deloitte",
		social: {
			linkedin: "#",
			twitter: "#",
		},
	},
	// Add more profiles...
];

export default function AlumniDirectory() {
	return (
		<section className="py-32 relative">
			{/* Magical Background Effect */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
			</div>

			<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/20 via-secondary/20 to-background blur-[120px] opacity-50" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
				}}
				className="container relative z-10">
				{/* Enhanced Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="max-w-2xl mx-auto text-center mb-24 relative">
					<motion.div
						animate={{ rotate: [0, 360] }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
					/>
					<Sparkles className="w-6 h-6 text-primary absolute top-0 right-20 animate-bounce" />
					<Sparkles className="w-4 h-4 text-secondary absolute bottom-10 left-20 animate-pulse" />

					<motion.h2
						className="relative font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-secondary/5 dark:text-secondary/10 blur-sm">
							Directory
						</span>
						<span className="relative text-5xl">
							<span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
								Alumni
							</span>{" "}
							<span className="bg-gradient-to-l from-primary via-secondary to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
								Directory
							</span>
						</span>
						<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-secondary/50 via-primary/50 to-secondary/50 blur-sm" />
					</motion.h2>
					<p className="text-muted-foreground text-lg">
						Connect with fellow alumni and expand your professional network
					</p>
				</motion.div>

				<div className="max-w-7xl mx-auto">
					{/* Enhanced Search and Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative backdrop-blur-xl bg-background/40 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-primary/10 mb-20">
						<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-50" />
						<div className="relative flex flex-col md:flex-row gap-4">
							<div className="relative md:w-1/2">
								<SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
								<Input
									placeholder="Search by name or company..."
									className="h-12 text-lg pl-12 bg-background/50 border-primary/20 hover:border-primary/40 transition-colors"
								/>
							</div>
							<Select>
								<SelectTrigger className="h-12 bg-background/50 border-primary/20 hover:border-primary/40 transition-colors">
									<SelectValue placeholder="Department" />
								</SelectTrigger>
								<SelectContent className="backdrop-blur-xl bg-background/70">
									<SelectItem value="cs">Computer Science</SelectItem>
									<SelectItem value="business">Business</SelectItem>
									<SelectItem value="engineering">Engineering</SelectItem>
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="h-12 bg-background/50 border-primary/20 hover:border-primary/40 transition-colors">
									<SelectValue placeholder="Class Year" />
								</SelectTrigger>
								<SelectContent className="backdrop-blur-xl bg-background/70">
									<SelectItem value="2023">2023</SelectItem>
									<SelectItem value="2022">2022</SelectItem>
									<SelectItem value="2021">2021</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</motion.div>

					{/* Enhanced Alumni Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{alumniProfiles.map((profile, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
								}}>
								<Card className="group hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-xl bg-background/40 border-primary/10">
									<CardContent className="p-8 relative">
										{/* Add subtle gradient overlay */}
										<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-secondary/[0.07] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

										{/* Add decorative corner accent */}
										<div className="absolute top-0 right-0 w-24 h-24">
											<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px]" />
										</div>

										<div className="relative flex items-start gap-6">
											<div className="relative">
												{/* Enhanced image container with double gradient ring */}
												<div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-sm" />
												<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" />
												<motion.div
													whileHover={{ scale: 1.05 }}
													transition={{ type: "spring", stiffness: 300 }}>
													<img
														src={profile.image}
														alt={profile.name}
														className="w-24 h-24 rounded-full object-cover ring-2 ring-background relative z-10"
													/>
												</motion.div>
											</div>

											<div className="space-y-2.5">
												<h3 className="font-bold text-xl group-hover:text-primary transition-colors">
													{profile.name}
												</h3>
												<p className="text-muted-foreground">
													<span className="font-medium bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent">
														{profile.role}
													</span>{" "}
													at{" "}
													<span className="font-semibold text-foreground">
														{profile.company}
													</span>
												</p>
												<div className="flex items-center gap-2 text-sm">
													<span className="px-3 py-1 rounded-full bg-primary/10 text-foreground font-medium">
														Class of {profile.graduation}
													</span>
													<span className="px-3 py-1 rounded-full bg-secondary/10 text-foreground font-medium">
														{profile.department}
													</span>
												</div>
											</div>
										</div>

										{/* Enhanced social links section */}
										<div className="mt-6 pt-6 border-t border-primary/10 flex gap-4">
											{profile.social.linkedin && (
												<motion.a
													href={profile.social.linkedin}
													whileHover={{ scale: 1.15, y: -2 }}
													className="p-2 rounded-full hover:bg-primary/[0.08] transition-colors">
													<LinkedinIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
												</motion.a>
											)}
											{profile.social.twitter && (
												<motion.a
													href={profile.social.twitter}
													whileHover={{ scale: 1.15, y: -2 }}
													className="p-2 rounded-full hover:bg-primary/[0.08] transition-colors">
													<TwitterIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
												</motion.a>
											)}
											{profile.social.website && (
												<motion.a
													href={profile.social.website}
													whileHover={{ scale: 1.15, y: -2 }}
													className="p-2 rounded-full hover:bg-primary/[0.08] transition-colors">
													<GlobeIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
												</motion.a>
											)}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
