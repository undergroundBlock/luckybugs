'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ]

  return (
    <header>
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href='/' className='flex items-center'>
              <Image 
              src='https://flowbite.com/docs/images/logo.svg' 
              width={33} 
              height={32}  className='h-8 mr-3' 
              alt='Flowbite Logo' />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Login</span>
          </Link>
          <div className='flex md:order-2'>
            <button type="button" onClick={() => setNavbar(!navbar)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800">Login</button>
              
            <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setNavbar(!navbar)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
              dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          
          <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
            navbar ? 'p-12 md:p-0 block' : 'hidden' }`} id='navbar-sticky'>
            
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              {links.map((link) => (
                <li key={link.id}>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' 
                    key={link.id} href={link.url}>{link.title}</Link>
                    </li>
                  ))}
                  {/* <button className='btn h-auto' onClick={() => {setNavbar(!navbar)}}>Logout</button> */}
            </ul>
          </div>
        
          <div className='md:hidden w-full bg-gray-800 fixed mt-6 top-12 left-0 right-0 z-10'>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden' }`}>
              <ul className='mx-auto h-screen md:h-auto pt-3 items-center justify-center md:flex'>
                  {links.map((link) => (
                    <li key={link.id} className='pb-6 text-xl border-b-2 md:border-b-0 md:px-6 text-center text-gray-300 
                    hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium'>
                      <Link onClick={() => setNavbar(!navbar)} className='align-middle' key={link.id} href={link.url} replace>{link.title}</Link>
                    </li>
                  ))}
                  <button className='btn h-auto' onClick={() => setNavbar(!navbar)}>Logout</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>


 
    </header>
  )
}
