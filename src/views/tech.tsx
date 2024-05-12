import { Oswald } from "next/font/google";
import TechCard from "@/components/techCard";
import styles from "../styles/Tech.module.css"

const oswald = Oswald({
  subsets: ['latin'],
  weight: "600"
})

export default function Tech() {

    const languages: string[] = ['C++', 'Javascript', 'Typescript', 'Golang',]
    
    const frontend: string[] = ['HTML', 'CSS', 'Tailwind CSS', 'React JS',
        'Next JS'
    ]

    const backend: string[] = ['Node JS', 'Express', 'JWT', 'MongoDB', 
        'Postman', 'Firebase', 'AppWrite', 'Next JS'
    ]

    const mobile: string[] = ['Flutter', 'Dart', 'Riverpod',]

    const core: string[] = ['Data Structures', 'Algorithms', 'OS', 'DBMS',
        'OOPS', 'Comouter Networks'
    ]

    const future: string[] = ['AI', '3D Graphics', 'Advanced Backend',
        'System Design'
    ]

    let techCards = [
        {
            title: 'Programming Languages',
            image: '/assets/lang.png',
            list: languages,
        },
        {
            title: "Frontend",
            image: "/assets/frontend.png",
            list: frontend
        },
        {
            title:"Backend",
            image:"/assets/backend.png",
            list: backend,
        },
        {
            title:"App Development",
            image:"/assets/mobile.png",
            list: mobile,
        },
        {
            title: 'Core Subjects',
            image: '/assets/core.png',
            list: core,
        },
        {
            title: 'Future Things I want to learn',
            list: future,
            image: '/assets/future.png',
        }
    ]

    let indTechCard = []
    for (let i = 0; i < techCards.length; i++) {
        indTechCard.push(
            <TechCard
                key={techCards[i].title}
                title={techCards[i].title}
                image={techCards[i].image}
                list={techCards[i].list}
            />
        )
    }

    return (
        <div
            id="tech"
            className="flex flex-col items-center
            w-auto h-auto px-2 py-5 mb-20 mt-[8px] mx-0 rounded-[40px] pb-10">
            <p
                className={`text-white text-6xl mb-7 py-5 ${oswald.className}`}>
                <b>
                    <u>
                        Skills
                    </u>
                </b>
            </p>
            <div className={`grid grid-cols-3 ${styles.grid}`}>
                {indTechCard}
            </div>
        </div>
    )
}