import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DaftarLoker,
  Home,
  TambahLoker,
  Profile,
  DaftarPelamar,
  DetailPelamar,
  EditProfile,
} from "./pages";
import { BottomNavbar } from "./component";

const App = () => {
  return (
    <div className='bg-[rgb(37,29,58)] min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='daftar_loker/'>
              <Route index element={<DaftarLoker />} />
              <Route path=':id/'>
                <Route index element={<DaftarPelamar />} />
                <Route path=':user' element={<DetailPelamar />} />
              </Route>
            </Route>
            <Route path='tambah_loker' element={<TambahLoker />} />
            <Route path='profile/'>
              <Route index element={<Profile />}/>
              <Route path='edit' element={<EditProfile />}/>
            </Route>
          </Route>
        </Routes>
        <BottomNavbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
