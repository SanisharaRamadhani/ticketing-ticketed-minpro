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

const NavbarOrg = () => {
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
      <div className="fixed z-40 ">
        <div
          className={`bg-black h-screen p-5 pt-8 fixed ${
            open ? 'w-24' : 'w-48'
          } duration-500 relative`}
        >
          <BsArrowRightShort
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <h1
              className={`text-white origin-left text-2xl duration-300 ${
                open && 'text-xs'
              }`}
            >
              Ticketed
            </h1>
          </div>
          <ul className="pt-2">
            <>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <RiDashboardFill />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  Dashboard
                </span>
              </li>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <SiEventstore />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  Events
                </span>
              </li>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <FaFirstOrderAlt />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  Orders
                </span>
              </li>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <SiMarketo />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  Marketing
                </span>
              </li>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <BiSolidReport />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  Reporting
                </span>
              </li>
              <li
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-10`}
              >
                <span className="text-4xl block float-left">
                  <TbSettingsCog />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 my-2 ${
                    open && 'hidden'
                  } `}
                >
                  OrgSetting
                </span>
              </li>
            </>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavbarOrg;
