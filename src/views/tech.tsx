import TechComponent from "@/components/techCom"
import { Bitter } from "next/font/google"
import styles from "../styles/Tech.module.css"

const bitter = Bitter({
    subsets: ['latin'],
    weight: "900"
})

export default function Tech() {
    const frontend: string[] = ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React JS',
        'Next JS'
    ]
    const backend: string[] = ['Node JS', 'Express', 'JWT', 'MongoDB', 'Golang',
        'Postman', 'Typescript', 'Firebase'
    ]
    const mobile: string[] = ['Flutter', 'Dart', 'Riverpod', 'Kotlin', 'AppWrite']

    return (
        <div
            className="flex flex-col items-center justify-evenly py-16 my-28 mx-28
            bg-pink-600 rounded-[40px] px-10"
            id="tech">
            <p
                className={`text-neutral-950 mb-4 p-1 text-5xl ${bitter.className}`}>
                <b>
                    Tech Stack
                </b>
            </p>
            <div
                className={`flex flex-row items-start justify-around mt-4 ${styles.component}`}>
                <TechComponent
                    image={"/assets/frontend.png"}
                    heading={"FRONTEND"}
                    list = {frontend}
                />
                <TechComponent
                    image={"/assets/backend.png"}
                    heading={"BACKEND"}
                    list = {backend}
                />
                <TechComponent
                    image={"/assets/mobile.png"}
                    heading={"APP DEVELOPMENT"}
                    list = {mobile}
                />
            </div>
        </div>
    )
}