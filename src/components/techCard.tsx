'use client'
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

export default function TechCard(
    {
        title,
        image,
        list }:
        {
            title: string,
            image: string,
            list: string[]
        }) {
    let cardRef = useRef<HTMLDivElement>(null)
    let inView = useInView(cardRef, {once: false})
    let animate = useAnimation()

    useEffect(() => {
        if (inView) {
            animate.start('visible')
        }
     }, [
        inView
    ])

    let indList = []
    for (let i = 0; i < list.length; i++) {
        let skill = list[i]
        indList.push(
            <div
                key={skill}
                className="m-1 p-1 border-white border-[0.5px] rounded-lg
                px-2 text-white text-center">
                {skill}
            </div>
        )
    }
    return (
        <motion.div
            ref={cardRef}
            variants={
                {
                    "hidden": { opacity: 0 },
                    "visible": { opacity: 1 },
                }
            }
            initial="hidden"
            animate={animate}
            transition={{
                duration: 2, delay: 0.75,
            }}
            className="flex flex-col items-center justify-evenly
            bg-neutral-900 m-5 rounded-2xl py-3 px-1 border-white border-[0.5px]">
            <div className="flex flex-row justify-center items-center p-2">
                <Image
                    className="mr-2 h-auto w-auto"
                    src={image}
                    alt={"image"}
                    height={30}
                    width={35}
                />
                <p
                    className="text-pink-600 text-2xl ml-2">
                    <b>
                        <u>{title}</u>
                    </b>
                </p>
            </div>
            <div
                className={`grid grid-cols-2 mt-3`}>
                {indList}
            </div>
        </motion.div>
    )
}