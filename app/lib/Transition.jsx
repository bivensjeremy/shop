'use client'

import { motion } from "framer-motion"

const Transition = ({ children, durationTime }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: durationTime }}
        >
            {children}
        </motion.div>
    );
}

export default Transition;