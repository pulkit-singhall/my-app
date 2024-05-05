'use client'
import { AuroraBackground } from "@/components/ui/aurora-background"
import About from "@/views/about"
import Contact from "@/views/contact";
import Tech from "@/views/tech";
import Education from "@/views/education";
import Project from "@/views/project";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<AuroraBackground
			className="flex flex-col items-center">
			<Navbar />
			<About />
			<Education />
			<Tech />
			<Project />
			<Contact />
		</AuroraBackground>
	)
}
