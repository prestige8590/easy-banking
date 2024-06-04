import React from 'react'

const Home = () => {
  return (
    <main className='flex items-center gap-[5rem] m-9'>
        <img src="./images/react.svg" className='w-[40%]' alt="" />
        <div className='w-[50%]'>
            <p className='text-[32px] font-[700]'>We craft holistic, people-friendly digital experiences.</p>
            <p className='my-5'>
            Nders Studio serves as a strategic partner for companies or individuals seeking a scalable MVP or Product. We specialize in UI/UX Design, Mobile App & Website development, Motion design, and Video Editing.
            </p>
            <button className='bg-[#00D8FF] px-[20px] py-[10px] text-white rounded-[10px]'>Get Started</button>
        </div>
    </main>
  )
}

export default Home