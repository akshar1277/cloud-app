import React from 'react'
import bgImg from '../assets/cyber-bg.png'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {FiDatabase,FiServer} from  'react-icons/fi'
import {  FaPaperPlane,} from 'react-icons/fa'



const Hero = () => {
  return (
   <div name='home' className="w-full h-screen bg-zinc-200 flex flex-col justify-between ">
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8   '>
            <p className='text-2xl '>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button className='py-3 mt-1 px-6 sm:w-[60%]'>Get Started</button>

        </div>
        <div>
            <img src={bgImg}   className='w-full' alt="" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200  border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap'>
                <p className='flex px-4 py-2 text-slate-500 ' ><AiOutlineCloudUpload  style={{color:'blue'}}  size={24}/>App Security</p> 
                <p className='flex px-4 py-2 text-slate-500' ><FiDatabase style={{color:'blue'}} size={24}/> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500' ><FiServer style={{color:'blue'}} size={24}/>   Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500' ><FaPaperPlane style={{color:'blue'}} size={24}/>API Services</p>
            </div>
            
        </div>
    </div>

   </div>
  )
}

export default Hero