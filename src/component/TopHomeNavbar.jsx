import React from 'react'
import photoProfile from './../assets/photoProfile.svg'

const TopHomeNavbar = () => {
  return (
    <div className='bg-[#2A2550] px-[30px] py-[20px] flex items-center border-b-[1px] border-black'>
      <h1 className='text-[20px] font-bold'>LOKERIA</h1>
      <img src={photoProfile} alt="" className='rounded-full ml-auto h-[40px]' />
    </div>
  );
}

export default TopHomeNavbar