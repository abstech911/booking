import React from "react";
import {motion} from "framer-motion";

export const Home = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{opacity: 0, transition: {duration: 0.5}}}

            style={{
                backgroundColor: 'blue',
                height: '100vh'
            }}>
            Home
        </motion.div>
    )


}
export const About = () => {

    return (
        <motion.div
            style={{
                backgroundColor: 'brown',
                height: '100vh'
            }}
            initial="hidden"
            animate="visible"
            exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            About
        </motion.div>
    )

}

