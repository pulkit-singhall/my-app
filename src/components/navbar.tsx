// there are 4 width sizes
// sm 640 (640 will be the min width)
// md 768
// lg 1024
// xl 1280

import SocialCom from "./socialCom"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Navbar() {
    const linkedIn = "https://www.linkedin.com/in/pulkit-singhal-a8113822a"
    const github = "https://github.com/pulkit-singhall"
    const twitter = "https://twitter.com/pulkit_singhall"
    const leetcode = "https://leetcode.com/u/pulkit_singhall"
    const instagram = "https://www.instagram.com/pulkit_singhall"

    return (
        <div
            id="navbar"
            className="sticky top-[65px] flex z-10000 overflow-hidden">
            <HoverCard
                openDelay={200}
                closeDelay={200}>
                <HoverCardTrigger asChild>
                    <button
                        className="text-black m-2 px-5 py-1 rounded-full bg-white">
                        <p
                            className="p-1">
                            <b>SOCIALS &#9759;</b>
                        </p>
                    </button>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div
                        className="flex flex-col items-center justify-evenly bg-white z-100">
                        <SocialCom
                            href={linkedIn}
                            title={"LinkedIn"}
                            image={"/assets/linkedin.png"}
                        />
                        <SocialCom
                            href={leetcode}
                            title={"Leetcode"}
                            image={"/assets/leetcode.svg"}
                        />
                        <SocialCom
                            href={github}
                            title={"GitHub"}
                            image={"/assets/github.png"}
                        />
                        <SocialCom
                            href={twitter}
                            title={"Twitter"}
                            image={"/assets/twitter.png"}
                        />
                        <SocialCom
                            href={instagram}
                            title={"Instagram"}
                            image={"/assets/instagram.png"}
                        />
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}