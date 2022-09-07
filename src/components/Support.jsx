import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import {FiPhone} from 'react-icons/fi'
import {HiSupport,HiChip} from 'react-icons/hi'
import supportImg from '../assets/support.jpg'


const Support = () => {
  return (
    <div name='support' className='w-full  mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative' >
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>SUPPORT</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit amet laborum? Numquam ab distinctio explicabo reiciendis excepturi quasi aut deleniti, quo temporibus. Et doloremque maxime quidem necessitatibus iure voluptatem officia delectus saepe illo?</p>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <FiPhone size={24}  style={{color:'white',background:'blue'}} className='w-16 h-16 p-4 rounded-lg mt-[-4rem] '   />
                    <h3 className='font-bold text-2xl my-6'>Sales</h3>
                    <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis magni debitis neque alias temporibus quo ducimus quasi omnis blanditiis!</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact us <FaArrowRight className='w-5 ml-2 mt-1'/></p>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <HiSupport size={24}  style={{color:'white',background:'blue'}} className='w-16 h-16 p-4 rounded-lg mt-[-4rem] '   />
                    <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                    <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis magni debitis neque alias temporibus quo ducimus quasi omnis blanditiis!</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact us <FaArrowRight className='w-5 ml-2 mt-1'/></p>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <HiChip size={24}  style={{color:'white',background:'blue'}} className='w-16 h-16 p-4 rounded-lg mt-[-4rem] '   />
                    <h3 className='font-bold text-2xl my-6'>Media Inqueries</h3>
                    <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis magni debitis neque alias temporibus quo ducimus quasi omnis blanditiis!</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact us <FaArrowRight className='w-5 ml-2 mt-1'/></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Support