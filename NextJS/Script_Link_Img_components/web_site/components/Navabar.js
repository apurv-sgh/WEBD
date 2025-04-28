import React from 'react'
import Link from 'next/link'    //prevents the reloading of the page while hovering to another page.

const Navabar = () => {
  return (
    <nav className='flex justify-between px-2 bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navabar
