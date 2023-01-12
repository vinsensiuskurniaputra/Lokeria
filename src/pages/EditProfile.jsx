import React from "react";
import photoProfile from "./../assets/photoProfile.svg";
import { ChevronLeftIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className='top-nav flex items-center gap-1'>
        <ChevronLeftIcon className='h-[24px] cursor-pointer' onClick={() => navigate(-1)}/>
        <h1 className='truncate flex-1'>Vinsensius Kurnia Putra</h1>
      </div>
      <div className='container pb-[70px]'>
        <img
          src={photoProfile}
          alt=''
          className='rounded-full h-[100px] mx-auto'
        />
        <h1 className='text-[20px] font-bold mt-[25px]'>Detail Pelamar</h1>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Nama</h1>
          <input
            type='text'
            className='input-text mt-[10px]'
            value='PT. SMK KITA'
          />
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Username</h1>
          <input
            type='text'
            className='input-text mt-[10px]'
            value='kitaBisa'
          />
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Email</h1>
          <input
            type='text'
            className='input-text mt-[10px]'
            value='kitaBisa@gmail.com'
          />
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Lokasi</h1>
          <input type='text' className='input-text mt-[10px]' value='Mars' />
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Tentang Perusahaan</h1>
          <textarea
            className='rounded-[30px] text-black p-3 w-full mt-[10px]'
            rows='10'
            value='Kita Bisa'
          ></textarea>
        </div>
        <button className='btn-main w-full mt-[30px]'>Simpan</button>
      </div>
    </div>
  );
};

export default EditProfile;
