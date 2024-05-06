import Image from "next/image"

export default function SocialCom({ title, image, href }:
    {
        title: string,
        image: string,
        href: string
    }) {
    return (
        <button
            className="rounded-full hover:bg-zinc-100 px-4">
            <a
                target="blank"
                href={href}>
                <div className="flex items-center justify-evenly py-2 px-1">
                    <Image
                        className="pr-2"
                        src={image}
                        alt={`${title} logo`}
                        width={28}
                        height={30}
                    />
                    <p
                        className="pl-1 text-lg">
                        <b>{title}</b>
                    </p>
                </div>
            </a>
        </button>
    )
}