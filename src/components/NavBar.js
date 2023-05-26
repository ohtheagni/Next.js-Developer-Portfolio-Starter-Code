import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, TwitterIcon, MenuIcon, CloseIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '', onClick }) => {
  const router = useRouter();

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`
            h-[1px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
      >
        &nbsp;
      </span>
    </a>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State variable to track menu visibility
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav className='sticky top-0'>
        <CustomLink
          href='/'
          title='Home'
          className='mr-4'
          onClick={handleLinkClick}
        />
        <CustomLink
          href='/about'
          title='About'
          className='mx-4'
          onClick={handleLinkClick}
        />
        <CustomLink
          href='/projects'
          title='Projects'
          className='mx-4'
          onClick={handleLinkClick}
        />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='https://github.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://twitter.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href='https://linkedin.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        >
          <LinkedInIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>

      {/* Hamburger Menu */}
      <div className='md:hidden ml-4'>
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <CloseIcon className='w-6' />
          ) : (
            <MenuIcon className='w-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-light py-2 px-4'>
          <CustomLink
            href='/'
            title='Home'
            className='block my-2'
            onClick={handleLinkClick}
          />
          <CustomLink
            href='/about'
            title='About'
            className='block my-2'
            onClick={handleLinkClick}
          />
          <CustomLink
            href='/projects'
            title='Projects'
            className='block my-2'
            onClick={handleLinkClick}
          />
        </div>
      )}
    </header>
  );
};

export default NavBar;
