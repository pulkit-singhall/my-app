'use client'
import About from "@/views/about"
import Contact from "@/views/contact";
import Tech from "@/views/tech";
import Project from "@/views/project";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedCursor from "react-animated-cursor"

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
			<Footer />
			<AnimatedCursor
				innerSize={18}
				outerSize={30}
				color='216, 27, 96'
				outerAlpha={0.2} // transparency of outer circle
				innerScale={1.4} // zoom of inner circle
				outerScale={2.0} // zoom of outer circle
				trailingSpeed={6}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link',
				]}
			/>
		</div>
	)
}
