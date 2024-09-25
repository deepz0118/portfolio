import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { ImMail4 } from "react-icons/im";
import { FaHackerrank } from "react-icons/fa6";
export default function Content() {
  return (
    <section className='flex flex-col md:flex-row px-5 w-full h-[91vh] py-20 bg-sec justify-center'>
      <div className='w-2/3 flex-col'>
      <h1 className='text-teal-300 font  font-new-font'>Hey, Im Deepika P!
        <p className='text-2xl'>Im a CSE(Cyber Security) Student</p>
        </h1>
        <div className='flex text-white py-9 '>
          <a href='#' className='pr-4 hover:text-teal-300 text-2xl'><IoLogoLinkedin /></a>
          <a href='#' className=' pr-4 hover:text-teal-300 text-2xl'><ImMail4 /></a>
          <a href='#' className='pr-4 hover:text-teal-300 text-2xl'><FaGithub /></a>
          <a href='#' className=' pr-4 hover:text-teal-300 text-2xl'><TbPhoneCalling /></a>
          <a href='#' className=' hover:text-teal-300 text-2xl'><FaHackerrank /></a>
        </div>
      </div>
    </section>
  )
}
