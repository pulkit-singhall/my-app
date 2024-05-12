export default function Footer() {
    return (
        <div
            className="px-2 py-1 m-5 fixed bottom-10 rounded-md bg-transparent 
            backdrop-blur-[4px] text-white">
            <a
                className="m-1 px-2"
                href="#about">
                About
            </a>
            <a
                className="m-1 px-1"
                href="#tech">
                Skills
            </a>
            <a
                className="m-1 px-1"
                href="#projects">
                Projects
            </a>
            <a
                className="m-1 px-1"
                href="#contact">
                Contact
            </a>
        </div>
    )
}