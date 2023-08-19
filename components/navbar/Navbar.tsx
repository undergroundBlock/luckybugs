'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 1,
      title: "Portfolio",
      url: "/Portfolio",
    },
    {
      id: 1,
      title: "blog",
      url: "/blog",
    },
    {
      id: 1,
      title: "About",
      url: "/About",
    },
    {
      id: 1,
      title: "Contact",
      url: "/Contact",
    },
    {
      id: 1,
      title: "Dashboard",
      url: "/Dashboard",
    },
  ]

  return (
    <header className="bg-gray-800 px-5 py-5">
      <div className='flex mx-auto max-w-5xl'>
        <Link href={"/"}>PsyTech</Link>
        <div>
          {links.map((link) => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}
          <button onClick={() => {console.log("Logged out")}}>Logout</button>
        </div>
      </div>
    </header>
  )
}
