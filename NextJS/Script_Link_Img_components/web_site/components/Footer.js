import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white text-xs py-4'>
        <div className="logo font-bold">@CopyRight. All Rights Reserved.</div>
        <ul className='flex gap-6'>
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/contact"><li>Contact</li></a>
        </ul>
    </footer>
  )
}

export default Footer
