'use client'
import About from "@/views/about"
import Contact from "@/views/contact";
import Tech from "@/views/tech";
import Education from "@/views/education";
import Project from "@/views/project";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<div
			className="flex flex-col justify-evenly items-center bg-neutral-950">
			<Navbar />
			<About />
			<Education />
			{/* <Tech /> */}
			<Project />
			<Contact />
		</div>
	)
}
