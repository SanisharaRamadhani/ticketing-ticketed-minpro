'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { RiDashboardFill, Ri4KFill } from 'react-icons/ri';
import { SiEventstore } from 'react-icons/si';
import { FaFirstOrderAlt } from 'react-icons/fa';
import { SiMarketo } from 'react-icons/si';
import { BiSolidReport } from 'react-icons/bi';
import { TbSettingsCog } from 'react-icons/tb';

const NavbarSide = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="fixed z-50 ">
        <div
          className={`bg-black h-screen p-5 pt-8 fixed ${
            open ? 'w-48' : 'w-24'
          } duration-500 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <h1
              className={`text-white origin-left text-2xl duration-300 ${
                !open && 'text-xs'
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
                    !open && 'hidden'
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
                    !open && 'hidden'
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
                    !open && 'hidden'
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
                    !open && 'hidden'
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
                    !open && 'hidden'
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
                    !open && 'hidden'
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
export default NavbarSide;
