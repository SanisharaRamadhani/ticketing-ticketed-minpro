'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { RiDashboardFill, Ri4KFill } from 'react-icons/ri';
import { SiEventstore } from 'react-icons/si';
import { FaFirstOrderAlt } from 'react-icons/fa';
import { SiMarketo } from 'react-icons/si';
import { BiSolidReport } from 'react-icons/bi';
import { TbSettingsCog } from 'react-icons/tb';

const NavbarSide = () => {
  const [open, setOpen] = useState(true);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);
  return (
    <>
      <div
        className={
          header
            ? 'bg-white fixed z-50 w-screen duration-500 hidden'
            : 'bg-white fixed z-50 w-screen duration-500'
        }
      >
        <div className=" px-10 w-screen h-[100px]  flex items-center justify-between gap-[200px]">
          <div className=" font-bold">
            <Link href="/">
              <p className="text-[#555486] text-3xl pr-[50px]">TICKETED</p>
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <button className="text-xs grid grid-cols-4 w-[120px] h-[40px] bg-transparent text-gray-800 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              <div className="mx-1 my-1 border border-gray-300 rounded-full w-[30px] h-[30px]"></div>
              <div className="py-3 grid col-span-3">Your Org.</div>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarSide;
