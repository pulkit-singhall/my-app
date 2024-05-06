// there are 4 width sizes
// sm 640 (640 will be the min width)
// md 768
// lg 1024
// xl 1280

import SocialCom from "./socialCom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Navbar() {
    const linkedIn = "https://www.linkedin.com/in/pulkit-singhal-a8113822a"
    const github = "https://github.com/pulkit-singhall"
    const twitter = "https://twitter.com/pulkit_singhall"
    const leetcode = "https://leetcode.com/u/pulkit_singhall"
    const instagram = "https://www.instagram.com/pulkit_singhall"

    return (
        <div
            id="navbar"
            className="fixed top-[65px] flex z-75">
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        className="text-black m-2 px-3 py-1 rounded-full bg-white">
                        <p
                            className="p-1">
                            SOCIALS &#9759;
                        </p>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div
                        className="flex flex-col items-center justify-evenly">
                        <SocialCom
                            href={linkedIn}
                            title={"LinkedIn"}
                            image={"/linkedin.png"}
                        />
                        <SocialCom
                            href={leetcode}
                            title={"Leetcode"}
                            image={"/leetcode.svg"}
                        />
                        <SocialCom
                            href={github}
                            title={"GitHub"}
                            image={"/github.png"}
                        />
                        <SocialCom
                            href={twitter}
                            title={"Twitter"}
                            image={"/twitter.png"}
                        />
                        <SocialCom
                            href={instagram}
                            title={"Instagram"}
                            image={"/instagram.png"}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}