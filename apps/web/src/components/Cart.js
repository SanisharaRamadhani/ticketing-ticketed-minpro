import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <>
       <div class="pt-20 pb-10">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <image src="/taylor.jpeg" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Taylor Swift Eras Tour </h2>
              <p class="mt-1 text-xs text-gray-700">Platinum A</p>
              <p class="mt-1 text-xs text-gray-700">Rp. 4.500.000</p>
            </div>
            <div class="mt-4 flex  sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100 ml-2">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className=' items-end pl-11 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
            </div>
          </div>
        </div>
      </div>



      <div className="mx-auto sticky top-[8rem] border-solid border-[2px] border-[#555486] w-[300px] h-[160px] rounded-lg bg-white shadow-[#555486] shadow-xl dark:bg-neutral-700">
            <p className="text-center py-3 ">Total</p>
            <p className="text-center pb-3 font-bold">Rp.9.000.000</p>
            <Link href="/checkout">
              {' '}
              <button className=" bg-[#555486]  rounded-sm text-white w-[200px] h-[30px] mx-[50px] ">
                Select Tickets
              </button>
            </Link>
          </div>
    </div>
  </div> 
        
    </>
  );
}
