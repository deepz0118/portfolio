import React from 'react';
import pro1 from '../assets/img/pro1.jfif';
import pro2 from '../assets/img/pro2.jfif';
import pro3 from '../assets/img/pro3.png';

export default function Projects() {
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-black text-white'>
      <div className='w-full'>
        <div className='flex justify-center'>
          <h1 className='text-4xl text-teal-300 border-b-4 mb-6 w-[170px] font-bold'>PROJECTS</h1>
        </div>
      </div>
      <div className='w-full text-white'>
        <div className='flex flex-col md:flex-row px-10 gap-10'>
          
          <div className='flex flex-col items-center'>
            <img className='h-[200px] w-[500px]' src={pro1} alt="Web Scraping Project"/>
            <p className='text-center text-2xl py-5'>Web Scraping using Python</p>
          </div>

          
          <div className='flex flex-col items-center'>
            <img className='h-[200px]  w-[500px]' src={pro2} alt="Secure Wallet Project"/>
            <p className='text-center text-2xl py-5'>Secure Wallet Solution</p>
          </div>

          
          <div className='flex flex-col items-center'>
            <img className='h-[200px]  w-[500px]' src={pro3} alt="Malicious File Identification"/>
            
            <p className='text-center text-2xl py-5'>Identification of Malicious File using Magic Number</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
