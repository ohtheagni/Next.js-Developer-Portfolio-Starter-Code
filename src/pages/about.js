import AnimatedText from '@/components/AnimatedText'
import Layouts from '@/components/Layouts'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import head_shot_cropped from "../../public/images/profile/head_shot_cropped.jpg"
import Skills from './Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const about = () => {
  return (
    <>
        <Head>
            <title> John Agni | About Page</title>
            <meta name="description" content="description" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layouts className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
                <div className='grid w-full grid-cols-6 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start pl-20'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='my-4 font-medium'>
                        Hi, I'm John Agni, a web developer and UI/UX designer with a passion for creating beautiful, functional,
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
new and innovative ways to bring my clients' visions to life.
                        </p>

                        <p className='my-4 font-medium'>
                        I believe that design is about more than just making things look pretty – it's about solving problems and
creating intuitive, enjoyable experiences for users.
                        </p>

                        <p className='font-medium'>
                        When I"m not at the computer I'm usually at the gym, enjoying some nature, getting lost in an open world rpg or enjoying a craft beer at a brewery.
                        </p>



                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                        <Image src={head_shot_cropped} alt="John Agni" className='w-full h-auto rounded-2xl' />
                    </div>




                </div>


            </Layouts>
            <Skills />
            <Experience />
            <Education />
        </main>
    </>
  )
}

export default about
