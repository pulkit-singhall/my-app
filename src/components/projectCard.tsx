import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { Oswald } from "next/font/google"
import styles from "../styles/Projects.module.css"

const oswald = Oswald({
    subsets: ['latin'],
    weight: "600"
})

export default function ProjectCard(
    {
        title,
        description,
        link,
        image,
    }
        :
        {
            title: string,
            description: string,
            link: string,
            image: string,
        }) {
    let ref = useRef(null)
    let view = useInView(ref)
    let animate = useAnimation()

    useEffect(() => {
        if (view) {
            animate.start("vis")
        }
    }, [view])
    return (
        <motion.div
            ref={ref}
            variants={
                {
                    "hidden": { opacity: 0 },
                    "vis": { opacity: 1, x: 0 }
                }
            }
            initial='hidden'
            animate={animate}
            transition={{ duration: 2, delay: 0.75 }}
            className={`flex flex-row bg-neutral-900 my-12 mt-3 rounded-lg justify-between 
            ${oswald.className} px-8 py-5 ${styles.card} border-white border-[0.5px]`}>
            <div className={`flex flex-col items-start w-[600px] justify-evenly 
            ${styles.disp} mr-5`}>
                <p className={`text-[30px] text-pink-600 mb-3 ${oswald.className}
                ${styles.title}`}>
                    <b><u>{title}</u></b>
                </p>
                <p
                    className={`text-white text-[15px] font-mono mb-3 ${styles.description}`}>
                    {description}
                </p>
                <div className="flex flex-row">
                    <div>
                        <button
                            className="bg-white px-3 py-1 rounded-md mt-2">
                            <a
                                target="blank"
                                className="text-white text-md"
                                href={link}>
                                <div className="flex flex-row items-center">
                                    <p className="text-black mr-2">
                                        Explore More
                                    </p>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt="Link"
                                        src="/assets/link.png"
                                    />
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="w-[250px] items-center flex flex-col justify-center">
                <Image
                    alt="Project Info Image was here"
                    src={image}
                    width={300}
                    height={200}
                />
            </div>
        </motion.div>
    )
}