import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Dancing_Script } from "next/font/google"
import { useState } from "react"

const dance = Dancing_Script({
    subsets: ['latin'],
    weight: "700"
})

export default function About() {

    const description = `An engineering student pursuing Computer Engineering from 
    DTU (Formerly DCE).
    Love trying my hands on building stuff, learn about new technologies and solve
    algorithmic problems.
    Currently learning App and Backend Development.
    Highly adaptable, curious nature and problem solving attitude makes me 
    suitable for taking up big roles.`

    const resumeLink =
        "https://drive.google.com/file/d/1mvLuz0Nw7DbFXHflpYU0iTk1jCvYkYEq/view?usp=drive_link"

    return (
        <div
            id="about"
            className="flex flex-col items-center justify-evenly p-10 my-28 mx-32">
            <div
                className="flex flex-col items-start mb-3">
                <p
                    className={`text-7xl ${dance.className} mb-2 pr-5 pb-4
                    bg-gradient-to-b from-neutral-100 to-neutral-600 bg-clip-text 
                    text-transparent
                    text-center`}>
                    <b>Pulkit Singhal</b>
                </p>
                <TextGenerateEffect words={description} />
            </div>
            <div className="mt-10">
                <button
                    className={`py-2 border-white border-2 rounded-full
                    px-4`}>
                    <a
                        target="blank"
                        href={resumeLink}>
                        <p
                            className={`text-1xl text-white`}>
                            RESUME
                        </p>
                    </a>
                </button>
            </div>
        </div>
    )
}