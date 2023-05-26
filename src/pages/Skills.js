import React from 'react'
import { motion } from 'framer-motion'



const Skill = ({name, x, y }) => {
    return (
        <>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
                '
                whileHover={{scale:1.05}}
                intial={{x:0, y:0}}
                whileInView={{ x:x, y:y}}
                transition={{duration: 1.5}}
                viewport={{once: true}} // this will animate the once upon view
                >
                {name}
            </motion.div>

        </>
    )

}


const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
        '
        whileHover={{scale:1.05}}>Web</motion.div>

        <Skill name="HTML5" x="-20vw" y="2vw" />
        <Skill name="CSS" x="20vw" y="6vw" />
        <Skill name="Python 3" x="0vw" y="12vw" />
        <Skill name="SQL" x="-20vw" y="-15vw" />
        <Skill name="Microservices" x="-15vw" y="-23vw" />
        <Skill name="Javascript ES6+" x="0vw" y="-13vw" />
        <Skill name="React" x="16vw" y="-5vw" />
        <Skill name="MongoDB" x="32vw" y="-5vw" />
        <Skill name="DOM manipulation" x="15vw" y="-20vw" />
        <Skill name="Domain-driven design" x="-25vw" y="18vw" />
        <Skill name="PostgreSQL" x="18vw" y="18vw" />
        <Skill name="FastAPI" x="-35vw" y="-10vw" />
        <Skill name="Django4" x="24vw" y="-27vw" />
        <Skill name="WebSockets" x="0vw" y="27vw" />

    </div>
    </>
  )
}

export default Skills
