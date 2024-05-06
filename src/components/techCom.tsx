import Image from "next/image"
import TechGrid from "./techGrid"

export default function TechComponent({ image, heading, list }:
    {
        image: string,
        heading: string,
        list: string[]
    }) {
    let techCom = []
    let length = list.length
    for (let i = 0; i < length; i++) {
        let item = list[i]
        techCom.push(<TechGrid
            title={item}
        />)
    }
    return (
        <div className="flex flex-col items-center m-8">
            <div className="flex flex-row items-center m-2 p-2">
                <Image
                    className="pr-2"
                    alt="some image was here"
                    src={image}
                    height={50}
                    width={50}
                />
                <p
                    className="text-white pl-2 text-2xl">
                    <b>{heading}</b>
                </p>
            </div>
            <div
                className="grid grid-cols-3">
                {techCom}
            </div>
        </div>
    )
}