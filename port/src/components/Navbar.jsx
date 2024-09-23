import React from 'react'
import { SquareMenu } from 'lucide-react';
import { SquareUserRound } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [Menu,setMenu]=useState(false);
  return (
    <h1 className='flex justify-between px-6 bg-sec text-2xl h-14 text-teal-300  font-bold'>
    <a href='#'>Deepika P</a>
    <nav className='hidden md:block'>
    <ul className='flex  font-medium'>
        <li><a href='#'>Home</a></li>
        <li><a href='../pages/About.jsx'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
        <button className='text-4xl'><SquareUserRound className='text-teal-300 h-5'/></button>
        </ul>    
    </nav>
    {Menu && <nav className='block md:hidden'>
    <ul className='flex flex-col font-medium fixed top-10 w-full h-1/3 bg-black left-0 text-center border-b-2'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Login</a></li>
        </ul>
        </nav>}
    <button onClick={()=>setMenu(!Menu)}className='block md:hidden'><SquareMenu className='text-teal-300 h-5 right-2'/></button>
    </h1>
  )
}
