import React from "react";
import {
  HomeIcon as Home,
  BriefcaseIcon as Briefcase,
  PlusCircleIcon as PlusCircle,
  UserIcon as User,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  BriefcaseIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className='fixed grid grid-cols-4 place-items-center bg-[#2A2550] border-t-[1px] border-black w-full md:w-[428px] bottom-0 py-[10px]'>
      <NavLink to='/'>
        {({ isActive }) =>
          isActive ? (
            <Home className='btn-nav text-[#E04D01]' />
          ) : (
            <HomeIcon className='btn-nav' />
          )
        }
      </NavLink>
      <NavLink to='/daftar_loker'>
        {({ isActive }) =>
          isActive ? (
            <Briefcase className='btn-nav text-[#E04D01]' />
          ) : (
            <BriefcaseIcon className='btn-nav' />
          )
        }
      </NavLink>
      <NavLink to='/tambah_loker'>
        {({ isActive }) =>
          isActive ? (
            <PlusCircle className='btn-nav text-[#E04D01]' />
          ) : (
            <PlusCircleIcon className='btn-nav' />
          )
        }
      </NavLink>
      <NavLink to='/profile'>
        {({ isActive }) =>
          isActive ? (
            <User className='btn-nav text-[#E04D01]' />
          ) : (
            <UserIcon className='btn-nav' />
          )
        }
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
