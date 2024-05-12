import { Oswald } from "next/font/google";
import ProjectCard from "@/components/projectCard";

const oswald = Oswald({
  subsets: ['latin'],
  weight: "600"
})

export default function Project() {

    const ama = 'https://github.com/pulkit-singhall/ama'
    const go_edtech = 'https://github.com/pulkit-singhall/go-edtech'
    const catalog = 'https://github.com/pulkit-singhall/CatalogApp'

    const ama_d = `Complete Backend and Frontend written with Next JS,
        an application to have anonymous conversions. Used interactive components
        of Shadcn library to make the interface user friendly. Also integrated the 
        Email sending API.`
    
    const go_ed_d = `Complete Backend of Edtech platforms like Udemy and 
        Coursera written in Golang. Used advanced techniques like MongoDB
        Aggregation pipelines to join different models and JWT for user
        authentication.`
    
    const catalog_d = `E-commerce Application made using Flutter and Riverpod package.
        All the data was fetched from external API.
        Used animations for various actions like Add to Cart etc.
        Realtime Firebase was used as the cloud backend.`

    return (
        <div
            className="flex flex-col items-center justify-evenly mt-[2px] mb-16
            bg-neutral-950 px-2 py-[14px] rounded-[25px] pb-16"
            id="projects">
            <div>
                <p
                className={`text-white text-6xl mb-7 py-5 ${oswald.className}`}>
                <b>
                    <u>Projects</u>
                </b>
            </p>
            </div>
            <div>
                <ProjectCard
                    title={"Anonymous Messaging Application"}
                    link={ama}
                    image={"/assets/ama.png"}
                    description={ama_d}
                />
                <ProjectCard
                    title={"GO-Edtech"}
                    link={go_edtech}
                    image={"/assets/go_ed.png"}
                    description={go_ed_d}
                />
                <ProjectCard
                    title={"Flutter shopping Application"}
                    link={catalog}
                    image={"/assets/catalog.png"}
                    description={catalog_d}
                />
            </div>
        </div>
    )
}