import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {

    const ref= useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>

            <h3 className='capitalize font-bold text-2xl'>
                {position}
                &nbsp;
                <a href={companyLink}
                target="_blank"
                className='text-primary capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 '>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>

        </motion.div>
    </li>

    )

}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64'>
        <h2 className='font-bold text-6xl text-center mb-32 w-full '>
            Application Development Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div
            style={{scaleY: scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'>

            </motion.div>
            <ul className='w-full flex flex-col items-start justify-betwen ml-4'>
                <Details
                    position="Full Stack Web Developer"
                    company="Dish Dynamo"
                    companyLink="https://team-scrumtious.gitlab.io/dish-dynamo/"
                    time="2023"
                    address="REMOTE"
                    work="Web application for individuals to look for and create recipes based on ingredients they have on hand ● Developed REST API endpoints using FastAPI framework to allow CRUD operations for recipes data enabling seamless data management for users
● Designed user-friendly interface using ChakraUI components and applied solutions for edge cases such as displaying an encouragement prompt with a link to create recipe aimed at enhancing user satisfaction
● Contributed to the development of web application by writing unit tests using Pytest frameworks resulting in improved code quality and increased confidence in code functionality"
                 />

                <Details
                    position="Full Stack Software Engineer"
                    company="CarCar"
                    companyLink="https://gitlab.com/charlene.xu92/project-beta"
                    time="2023"
                    address="REMOTE"
                    work="Internal application for car dealership inventory management and sales
● Utilized Django and SQLite to develop the back end, ensuring the system can handle large amounts of data, while also minimizing development time to five days
● Increased efficiency by implementing microservice architecture in Django reducing response time by 20%
● Implemented dynamic user interface using React allowing for improved user experience and engagement"
                 />
            </ul>
        </div>

    </div>
  )
}

export default Experience
