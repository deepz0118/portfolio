import React from 'react'
import Project from '../assets/img/pro1.jfif'
import pro2 from '../assets/img/pro2.jfif'
import pro3 from '../assets/img/pro3.png'
export default function Myproject() {
  return (
    <>
    <div className=' service-card w-[1200px] snap-start shrink-0 py-16 px-6 flex flex-row items-start gap-32'>
<div class="relative flex w-80 flex-col rounded-xl bg-teal-300 bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  <img src={Project}/>
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Web Scraping Using Python
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
<div class="relative flex w-80 flex-col rounded-xl bg-teal-300 bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  <img src={pro2}/>
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Secure Crypto wallet Solution
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
<div class="relative flex w-80 flex-col rounded-xl bg-teal-300 bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  <img src={pro3}/>
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Identification of Malicious file Using Magic Number
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
</div>
    </>
  )
}
