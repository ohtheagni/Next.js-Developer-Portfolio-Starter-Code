import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HireMe = () => {
  return (
    <div className ='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden py-1' >
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='w-40 h-40 flex items-center justify-center relative'>
        <CircularText className={"fill-dark animate-spin-slow"} />

        <Link href='mailto:johncliffordagni@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>
            Hire Me
        </Link>

        </motion.div>
    </div>
  )
}

export default HireMe
