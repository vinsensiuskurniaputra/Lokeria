import React from "react";
import { TopHomeNavbar, CardLoker } from "../component";

const Home = () => {
  return (
    <div>
      <TopHomeNavbar />
      <div className='mx-[30px] my-[20px]'>
        <h1 className='text-[20px] font-semibold'>Selamat Datang Admin,</h1>
        <h1 className='text-[30px] font-bold'>PT.SMK KITA</h1>
        <div className='mt-[50px]'>
          <div className='grid gap-2'>
            <h1 className='text-[20px] font-bold'>Daftar Loker Anda</h1>
            <CardLoker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
