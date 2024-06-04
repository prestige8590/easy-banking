import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex justify-between bg-gray-400 items-center py-[20px] px-[50px]'>
         <Link to="/">
            <img src="./images/vite.svg" alt="" />
        </Link>
        <ul className='flex gap-[40px]'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer