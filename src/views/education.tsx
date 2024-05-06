import { motion } from "framer-motion"

export default function Education() {
    return (
        <motion.div
            className="my-32"
            initial="hidden"
        whileInView="visible">
            <p className="text-white">Education</p>
       </motion.div>
    )
}