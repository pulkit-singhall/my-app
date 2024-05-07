import { Oswald } from "next/font/google";
import TechCard from "@/components/techCard";
import styles from "../styles/Tech.module.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

const oswald = Oswald({
  subsets: ['latin'],
  weight: "600"
})

export default function Tech() {

    let divRef = useRef<HTMLDivElement>(null)
    let inView = useInView(divRef)
    let animate = useAnimation()

    useEffect(() => {
        if (inView) {
            animate.start('visible')
        }
     }, [
        inView
    ])

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
                title={techCards[i].title}
                image={techCards[i].image}
                list={techCards[i].list}
            />
        )
    }

    return (
        <motion.div
            ref={divRef}
            variants={
                {
                    "hidden": { opacity: 0 },
                    "visible": {opacity: 1}
                }
            }
            initial="hidden"
            animate={animate}
            transition={{duration: 2, delay: 0.25}}
            id="tech"
            className="flex flex-col items-center bg-neutral-900
            w-auto h-auto px-2 py-5 mb-40 mt-16 mx-0 rounded-[40px] pb-10">
            <p
                className={`text-white text-6xl mb-10 py-5 ${oswald.className}`}>
                <b>Skills</b>
            </p>
            <div className={`grid grid-cols-3 ${styles.grid}`}>
                {indTechCard}
            </div>
        </motion.div>
    )
}