import React from 'react'
import MyImg from '../assets/img/profile.jpeg'
export default function 

() {
  return (<section className='flex flex-col md:flex-row bg-black px-5'>
    <div className=' md:w-1/2'>
      <img className=" w-2/3 flex-col px-10 flex h-2/3"src={MyImg} />
    </div>
    <div className='w-3/4 flex justify-center '>
    <div className='flex flex-col justify-center'>

        <h1 className='text-4xl text-teal-300 border-b-4 mb-6 w-[170px] font-bold'>About Me</h1>
        <p className='text-white text-2xl'>As a dedicated Cyber Security student at Sri Shakthi Institute
         of Engineering and technology, Passionate professional with a
        strong dedication to excellence and a keen interest in
        embracing new technologies.
        Quick learner and adaptable
team player.Committed to staying at the forefront of
technological advancements. Eager to contribute enthusiasm
and expertise to a dynamic team.</p>
    </div>
    </div>
    </section>
  )
}
