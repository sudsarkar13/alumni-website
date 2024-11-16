"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
	{
		title: "Annual Alumni Reunion 2024",
		date: "June 15, 2024",
		time: "6:00 PM",
		location: "Main Campus Auditorium",
		image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80",
		category: "Networking",
		spots: "Limited spots",
	},
	{
		title: "Virtual Career Fair",
		date: "July 22, 2024",
		time: "7:00 PM",
		location: "Online Event",
		image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80",
		category: "Career",
		spots: "Unlimited",
	},
	// Add more events...
];

export default function AlumniEvents() {
	return (
		<section className="py-32 relative">
			{/* Magical Background Effect */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
			</div>

			<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-secondary/20 via-primary/20 to-background blur-[120px] opacity-50" />

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
						className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
					/>
					<Sparkles className="w-6 h-6 text-primary absolute top-0 right-20 animate-bounce" />
					<Sparkles className="w-4 h-4 text-secondary absolute bottom-10 left-20 animate-pulse" />

					<motion.h2
						className="relative font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-secondary/5 dark:text-secondary/10 blur-sm">
							Events
						</span>
						<span className="relative text-5xl">
							<span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
								Upcoming
							</span>{" "}
							<span className="bg-gradient-to-l from-primary via-secondary to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
								Events
							</span>
						</span>
						<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-secondary/50 via-primary/50 to-secondary/50 blur-sm" />
					</motion.h2>
					<p className="text-muted-foreground text-lg">
						Join us for exclusive alumni events and networking opportunities
					</p>
				</motion.div>

				{/* Events Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{events.map((event, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<Card className="group hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-xl bg-background/40 border-primary/10">
								<CardContent className="p-0">
									<div className="relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
										<motion.img
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.4 }}
											src={event.image}
											alt={event.title}
											className="w-full h-48 object-cover"
										/>
										<Badge className="absolute top-4 right-4 z-20 bg-primary/90 hover:bg-primary backdrop-blur-md">
											{event.category}
										</Badge>
									</div>

									<div className="p-6 relative">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
										<div className="relative">
											<h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
												{event.title}
											</h3>

											<div className="space-y-3 mb-6">
												<motion.div
													whileHover={{ x: 5 }}
													className="flex items-center gap-3 text-muted-foreground">
													<Calendar className="w-4 h-4 text-primary" />
													<span>{event.date}</span>
												</motion.div>
												<motion.div
													whileHover={{ x: 5 }}
													className="flex items-center gap-3 text-muted-foreground">
													<Clock className="w-4 h-4 text-primary" />
													<span>{event.time}</span>
												</motion.div>
												<motion.div
													whileHover={{ x: 5 }}
													className="flex items-center gap-3 text-muted-foreground">
													<MapPin className="w-4 h-4 text-primary" />
													<span>{event.location}</span>
												</motion.div>
											</div>

											<div className="flex items-center justify-between pt-4 border-t border-primary/10">
												<Badge variant="secondary" className="bg-secondary/10">
													{event.spots}
												</Badge>
												<Button
													className="group/btn relative overflow-hidden"
													variant="ghost">
													<span className="relative z-10 group-hover/btn:text-primary transition-colors">
														Register
													</span>
													<ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
													<div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
												</Button>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
