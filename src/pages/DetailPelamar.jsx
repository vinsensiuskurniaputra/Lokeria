import React from "react";
import photoProfile from "./../assets/photoProfile.svg";
import { ChevronLeftIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const DetailPelamar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className='top-nav flex items-center gap-1'>
        <ChevronLeftIcon className='h-[24px] cursor-pointer' onClick={() => navigate(-1)} />
        <h1 className='truncate flex-1'>Vinsensius Kurnia Putra</h1>
      </div>
      <div className='container pb-[70px]'>
        <img src={photoProfile} alt='' className='rounded-full h-[150px] mx-auto' />
        <h1 className='text-[20px] font-bold mt-[25px]'>Detail Pelamar</h1>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Nama</h1>
          <h1 className='input-text bg-white mt-[10px]'>
            Vinsensius Kurnia Putra
          </h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>CV</h1>
          <button className='input-text bg-white rounded-full flex'>
            <h1>Download CV</h1>
            <ArrowDownTrayIcon className='h-[24px] ml-auto' />
          </button>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Portofolio</h1>
          <button className='input-text bg-white rounded-full flex'>
            <h1>Download Portofolio</h1>
            <ArrowDownTrayIcon className='h-[24px] ml-auto' />
          </button>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Email</h1>
          <h1 className='input-text bg-white mt-[10px]'>
            Vinsensius@gmail.com
          </h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Pengalaman</h1>
          <div className='flex flex-wrap gap-2'>
            <h1 className='rounded-full w-fit text-black px-3 py-1 bg-white mt-[10px]'>
              Mabar
            </h1>
            <h1 className='rounded-full w-fit text-black px-3 py-1 bg-white mt-[10px]'>
              Kelas Industri ML
            </h1>
          </div>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Pendidikam</h1>
          <h1 className='input-text bg-white mt-[10px]'>SMK</h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Status Saat Ini</h1>
          <h1 className='input-text bg-white mt-[10px]'>Pelajar</h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Skill</h1>
          <div className='flex flex-wrap gap-2'>
            <h1 className='rounded-full w-fit text-black px-3 py-1 bg-white mt-[10px]'>
              Main
            </h1>
            <h1 className='rounded-full w-fit text-black px-3 py-1 bg-white mt-[10px]'>
              Tidur
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPelamar;
