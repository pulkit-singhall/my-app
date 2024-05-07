import QueryDrawer from "@/components/queryDrawer"
import { Oswald } from "next/font/google";
import styles from "../styles/Contact.module.css"

const oswald = Oswald({
  subsets: ['latin'],
  weight: "600"
})

export default function Contact() {
    const email = 'singhal.pulkit667@gmail.com'
    return (
        <div
            className={`flex flex-row items-start justify-evenly w-screen 
            px-10 pb-20 bg-neutral-900 rounded-t-[60px] pt-10 ${styles.contact}`}
            id="contact">
            <div
                className="mx-6 my-5">
                <p
                    className={`text-pink-600 text-6xl ${oswald.className}`}>
                    <b>Want to be in touch with me?</b>
                </p>
            </div>
            <div className="flex flex-col items-center justify-evenly mx-6 my-5 p-2">
                <p
                    className={`text-white text-4xl mb-5 ${styles.email}`}>
                    <b>{email}</b>
                </p>
                <QueryDrawer/>
            </div>
        </div>
    )
}