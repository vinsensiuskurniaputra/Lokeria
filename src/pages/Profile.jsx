import React from "react";
import photoProfile from "./../assets/photoProfile.svg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className='top-nav'>
        <h1>vinsensius</h1>
      </div>
      <div className='container  pb-[70px] '>
        <div className='flex items-center gap-2'>
          <img src={photoProfile} alt='' className='rounded-full h-[100px]' />
          <div>
            <h1 className='text-[24px] font-bold'>PT. KITA BISA</h1>
            <h1 className='text-[15px]'>@kitaBISA</h1>
          </div>
        </div>
        <Link to="/profile/edit">
        <button className='btn-main mt-[30px] w-full'>Edit Profile</button>
        </Link>
        <h1 className='text-[20px] font-bold mt-[40px]'>Detail Profile</h1>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Nama Perusahaan</h1>
          <h1 className='input-text bg-white mt-[10px]'>PT. KITA BISA</h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Email</h1>
          <h1 className='input-text bg-white mt-[10px]'>kitabisa@gmail.com</h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Lokasi</h1>
          <h1 className='input-text bg-white mt-[10px]'>Mars</h1>
        </div>
        <div className='mt-[20px]'>
          <h1 className='text-[15px] font-semibold'>Tentang Perusahaan</h1>
          <h1 className='w-full rounded-[30px] text-black px-3 py-3 bg-white mt-[10px]'>
            IT Company yang bergerak di industri pembuatan aplikasi baik web
            application atau mobile application, serta AI Machine Learning.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
