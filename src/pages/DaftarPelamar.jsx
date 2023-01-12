import { ChevronLeftIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'
import React from 'react'
import photoProfile from "./../assets/photoProfile.svg";
import { Link, useNavigate } from "react-router-dom";

const DaftarPelamar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='top-nav flex items-center gap-1'>
        <ChevronLeftIcon
          className='h-[24px] cursor-pointer'
          onClick={() => navigate(-1)}
        />
        <h1 className='truncate flex-1'>Frontend Developer</h1>
        <Cog8ToothIcon className='h-[24px] ml-auto' />
      </div>
      <div className='container pb-[70px]'>
        <h1 className='text-[20px] font-bold'>Daftar Pelamar</h1>
        <Link to="/daftar_loker/1/vinsensius">
        <div className='flex gap-2 p-[12px] items-center bg-[#FF7700] rounded-[10px] mt-3'>
          <img src={photoProfile} alt='' className='rounded-full h-[50px]' />
          <h1 className='text-[20px] font-bold'>Vinsensius Kurnia Putra</h1>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default DaftarPelamar