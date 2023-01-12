import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';    
import { CardLoker } from '../component';

const DaftarLoker = () => {
  return (
    <div className=''>
      <div className='top-nav'>
        <div className='bg-white rounded-[20px] flex px-3 py-2 items-center'>
          <input type='text' className='w-full focus:outline-none text-black' placeholder='Search' />
          <MagnifyingGlassIcon className='h-[24px] text-[#E04D01]' />
        </div>
      </div>
      <div className='mx-[30px] my-[20px]'>
        <CardLoker />
      </div>
    </div>
  );
}

export default DaftarLoker