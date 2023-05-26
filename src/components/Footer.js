import React from 'react'
import Layouts from './Layouts'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2  border-solid border-dark font-medium text-md px-5">
        <Layouts className="py-8 flex items-center justify-between">
            <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With &hearts; <span className="text-primary text-2xl px-1"></span>
            </div>

            <Link href="/">John Agni</Link>
            <Link href="/">Say hello</Link>
        </Layouts>
    </footer>
  )
}

export default Footer
