export default function Navbar() {
    return (
        <div
            className="fixed z-100 top-10 flex flex-row items-center
            justify-evenly border-gray-300 rounded-full border-2 m-2 px-3 py-2
            bg-gradient-to-r from-violet-50 via-blue-50 to-zinc-50">
            <a
                className="mx-2 my-1 text-gray-500 hover:text-black"
                href="#about">
                About
            </a>
            <a
                className="mx-2 my-1 text-gray-500 hover:text-black"
                href="#education">
                Education
            </a>
            <a
                className="mx-2 my-1 text-gray-500 hover:text-black"
                href="#tech">
                Tech Stack
            </a>
            <a
                className="mx-2 my-1 text-gray-500 hover:text-black"
                href="#projects">
                Projects
            </a>
            <a
                className="mx-2 my-1 text-gray-500 hover:text-black"
                href="#contact">
                Contact
            </a>
        </div>
    )
}