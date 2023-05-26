import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layouts from '@/components/Layouts'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"

 const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link className='w-1/2 cursor pointer overflow-hidden rounded-lg' href={link} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold' >{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>

                    <Link className='w-10' href={github} target="_blank">
                        <GithubIcon />
                    </Link>

                    <Link href={link} target="_blank" className='ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>

                </div>


            </div>
        </article>
    )
 }

 const Project = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
        <Link className='w-full cursor pointer overflow-hidden rounded-lg' href={link} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6 mt-4'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold' >{title}</h2>
                </Link>


                <div className='w-full mt-2 flex items-center justify-between'>

                <Link href={link} target="_blank" className='ml-4 text-lg font-semibold underline'>
                        Visit
                </Link>

                    <Link className='w-8' href={github} target="_blank">
                        <GithubIcon />
                    </Link>



                </div>


            </div>
        </article>
    )

 }

const projects = () => {
  return (
    <>
        <Head>
            <title> John Agni | Projects Page</title>
            <meta name="description" content="description" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center px-10'>
            <Layouts className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge" className='mb-16' />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        type="Featured Project"
                        title="Dish Dynamo"
                        summary="web application which allows users to search and create recipes based on ingredients on hand"
                        img={project1}
                        link="/"
                        github="https://team-scrumtious.gitlab.io/dish-dynamo/"
                         />
                    </div>
                    <div className='col-span-6'>
                    <Project
                        type="Featured Project"
                        title="Dish Dynamo"
                        img={project1}
                        link="/"
                        github="https://team-scrumtious.gitlab.io/dish-dynamo/"
                         />
                    </div>
                    <div className='col-span-6'>
                        Project-2
                    </div>
                    <div className='col-span-6'>
                        Project-3
                    </div>
                </div>
            </Layouts>
        </main>
    </>
  )
}

export default projects
