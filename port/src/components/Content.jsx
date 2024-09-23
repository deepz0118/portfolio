import React from 'react'
import MyImg from '../assets/img/mypic.jpg';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
export default function Content() {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-sec justify-center'>
      <div className='w-2/3 flex-col'>
      <h1 className='text-teal-300 text-4xl  font-new-font'>Hi, <br/> Im Deepika P
        <p className='text-2xl'>Im a CSE(Cyber Security) Student</p>
        </h1>
        <div className='flex text-white py-8 '>
          <a href='#' className='pr-4 hover:text-teal-300'><Linkedin /></a>
          <a href='#' className=' pr-4 hover:text-teal-300'><Mail /></a>
          <a href='#' className=' hover:text-teal-300'><Phone /></a>
        </div>
      </div>
        <img className='gap-2 w-96 h-96 size-8 img'src={MyImg} />
    </section>
  )
}
