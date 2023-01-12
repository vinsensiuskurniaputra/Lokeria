import React from "react";

const TambahLoker = () => {
  return (
    <div>
      <div className='top-nav'>
        <h1>Tambah Loker</h1>
      </div>
      <div className='mx-[30px] pb-[70px] '>
        <div className='mt-[20px]'>
          <label htmlFor='jenis' className='text-[20px] font-semibold'>
            Jenis Magang
          </label>
          <input
            id='jenis'
            type='text'
            className='input-text mt-[10px]'
            placeholder='Jenis Magang'
          />
        </div>
        <div className='mt-[20px]'>
          <label htmlFor='jenis' className='text-[20px] font-semibold'>
            Minimal Pendidikan
          </label>
          <input
            id='jenis'
            type='text'
            className='input-text mt-[10px]'
            placeholder='Minimal Pendidikan'
          />
        </div>
        <div className='mt-[20px]'>
          <label htmlFor='jenis' className='text-[20px] font-semibold'>
            Deskripsi
          </label>
          <textarea
            id='Deskrips'
            rows='10'
            placeholder='Deskripsi'
            className='w-full rounded-[30px] mt-[10px] text-black p-3'
          ></textarea>
        </div>
        <button className='w-full btn-main mt-[30px]'>Buat Lamaran</button>
      </div>
    </div>
  );
};

export default TambahLoker;
