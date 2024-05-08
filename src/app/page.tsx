'use client'
import About from "@/views/about"
import Contact from "@/views/contact";
import Tech from "@/views/tech";
import Project from "@/views/project";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<div
			className="flex flex-col justify-evenly items-center 
			bg-neutral-950 m-0">
			<Navbar />
			<About />
			<Tech />
			<Project />
			<Contact />
			<Footer/>
		</div>
	)
}
