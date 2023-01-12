import React from "react";
import { UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const CardLoker = () => {
  return (
    <Link to='/daftar_loker/1'>
      <div className='bg-[#FF7700] rounded-[10px] p-[15px] cursor-pointer'>
        <div className='grid grid-cols-7 gap-1'>
          <div className='col-span-6'>
            <h1 className='font-bold text-[20px]'>Frondend Developer</h1>
            <div className='flex gap-1 items-center'>
              <AcademicCapIcon className='h-[20px]' />
              <h1 className='text-[10px] font-medium'>SMK / SMA / Mahasiswa</h1>
            </div>
            <h1 className='font-bold taxt-[15px]'>Deskripsi</h1>
            <h1 className='w-full mt-[10px] text-[10px]'>
              PT starlink Teknologi Integrasi,IT Company yang bergerak di
              industri pembuatan aplikasi baik web application atau mobile
              application, serta AI....
            </h1>
          </div>
          <div className='flex gap-1'>
            <h1>100</h1>
            <UserGroupIcon className='h-[24px]' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLoker;
