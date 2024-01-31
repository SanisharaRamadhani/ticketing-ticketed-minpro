
import { FaListUl } from 'react-icons/fa';


'use client';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ListEvent = () => {
  return (
    <>
      {/* dashboard organizer */}
      <div className="px-[150px] pt-[100px]">
        <div className="font-bold text-5xl pt-5">Events</div>
      </div>
      <div className="px-[150px] pt-[50px]">
        <div className="grid grid-cols-10 pb-[50px]">
          <button>
            <p className="font-bold text-base mt-5 mx-5 underline underline-offset-8">
              Events
            </p>
          </button>
          <button>
            <p className="font-bold text-base mt-5 mx-5">Collections</p>
          </button>
        </div>
        <div className="grid grid-cols-5 py-2 px-2">
          <div class="relative" data-te-input-wrapper-init>
            <input
              type="search"
              class="peer block min-h-[auto] w-[200px] rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleSearch2"
              placeholder="Type query"
            />
            <label
              for="exampleSearch2"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
            >
              Search
            </label>
          </div>
          <div className="grid grid-cols-2">
            <div className="rounded-2xl bg-sky-600  mx-2">
              <p className="text-center my-2">List</p>
            </div>
            <div className="rounded-2xl mx-2">
              <p className="text-center my-2">Calender</p>
            </div>
          </div>
          <div className="grid grid-cols-5 col-span-2 px-2">
            <div className="bg-sky-600 rounded-2xl">
              <p className="text-center my-2">All event</p>
            </div>
          </div>
          <div className="bg-amber-300 px-2 rounded-md">
            <p className="text-start my-2">Create Event</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-[50px] px-2 bg-slate-500 py-5 ">

          <div className="mx-5">
            <p>Event</p>
          </div>
          <div className="grid grid-cols-4">
            <p>Sold</p>
            <p>Gross</p>
            <p>Status</p>
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-center items-center gap-5 pt-10">
          {/* cards 1*/}
          <Link href="/event" className="cursor-pointer">
            <div class="cursor-pointers block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
               <image
                  class="rounded-t-lg"
                  src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
                  alt=""
                />
              </div>
              <div class="p-6">
                <p class="text-base text-neutral-600 dark:text-neutral-200">
                  <div className="p-3">
                    <div className="text-md font-bold">Blues </div>
                    <h className="font-light text-sm leading-6 text-gray-700 my-2">
                      05 February 2023
                    </h>
                    <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                    <p className="paragraph-normal text-gray-600">
                      Rp. 1.800.000 - 2.800.000
                    </p>
                    <Link className="mt-3 block" href="#"></Link>
                  </div>
                </p>
              </div>
            </div>
          </Link>

          <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
             <image
                class="rounded-t-lg"
                src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
                alt=""
              />
            </div>
            <div class="p-6">
              <p class="text-base text-neutral-600 dark:text-neutral-200">
                <div className="p-3">
                  <div className="text-md font-bold">Blues </div>
                  <h className="font-light text-sm leading-6 text-gray-700 my-2">
                    05 February 2023
                  </h>
                  <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                  <p className="paragraph-normal text-gray-600">
                    Rp. 1.800.000 - 2.800.000
                  </p>
                  <Link className="mt-3 block" href="#"></Link>
                </div>
              </p>
            </div>
          </div>

          <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
             <image
                class="rounded-t-lg"
                src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
                alt=""
              />
            </div>
            <div class="p-6">
              <p class="text-base text-neutral-600 dark:text-neutral-200">
                <div className="p-3">
                  <div className="text-md font-bold">Blues </div>
                  <h className="font-light text-sm leading-6 text-gray-700 my-2">
                    05 February 2023
                  </h>
                  <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                  <p className="paragraph-normal text-gray-600">
                    Rp. 1.800.000 - 2.800.000
                  </p>
                  <Link className="mt-3 block" href="#"></Link>
                </div>
              </p>
            </div>
          </div>

          <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
             <image
                class="rounded-t-lg"
                src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
                alt=""
              />
            </div>
            <div class="p-6">
              <p class="text-base text-neutral-600 dark:text-neutral-200">
                <div className="p-3">
                  <div className="text-md font-bold">Blues </div>
                  <h className="font-light text-sm leading-6 text-gray-700 my-2">
                    05 February 2023
                  </h>
                  <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                  <p className="paragraph-normal text-gray-600">
                    Rp. 1.800.000 - 2.800.000
                  </p>
                  <Link className="mt-3 block" href="#"></Link>
                </div>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default ListEvent;
