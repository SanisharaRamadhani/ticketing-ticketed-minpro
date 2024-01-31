import Image from 'next/image';
import Link from 'next/link';

export default function Ticket() {
  return (
    <>
      <div class=" bg-gray-100 pt-20  ">
        <h1 class="mb-10 text-center text-2xl font-bold">Ticket Options</h1>
        <div className=" pl-[100px] pb-8 flex gap-10 justify-center ">
          <Image
            src="/taylor.jpeg"
            alt="groov"
            width={200}
            height={100}
            className="border shadow-sm"
          />
          <div>
            <div className="pb-[16px]">
              <p className=" font-extrabold text-4xl">
                Taylor Swift The Eras Tour
              </p>
            </div>

            <div className="flex gap-2 pb-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18c.247.31.494.622.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.382 8.382 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018z"
                />
              </svg>
              <p>
                Indonesia Convention Exhibition (ICE) BSD City (Indonesia
                Convention Exhibition)
              </p>
            </div>

            <div className="flex gap-2 pb-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                />
              </svg>
              <p>5 Feburary 2024</p>
            </div>

            <div className="flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
                  />
                </g>
              </svg>
              <p>18.00-21.00</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" pb-10">
          <hr className=" pr-[16px] border-solid border-[#555486] pb-4 " />
          <p className="pb-4 text-center">Choose Your Tickets and Quantity</p>
          <hr className=" pr-[16px] border-solid border-[#555486]" />
        </div>
      </div>

      <div className="flex gap-[50px] justify-center pb-10 ">
        <div className=" items-center  ">
          <div className="pb-10">
            <div className="bg-white w-[600px] h-[8rem] rounded-lg shadow-md  ml-4 pb-[100px] ">
              <div className="flex gap-[16rem] pt-5 ml-4">
                <p>Platinum A</p>
                <div className=" flex gap-6 pt-2">
                  <p>Rp.2,800.000</p>

                  <div class="flex items-center border-gray-100">
                    <span class="cursor-pointer rounded-l bg-gray-400 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      -{' '}
                    </span>
                    <input
                      class="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span class="cursor-pointer rounded-r bg-gray-400 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      +{' '}
                    </span>
                  </div>
                </div>
              </div>

              <hr className=" pr-[16px] border-solid border-[#555486] mt-2 mb-2 " />

              <div className="flex ml-4">
                <p>View Details</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className=" pt-7">
            <div className=" bg-white w-[600px] h-[8rem] rounded-lg shadow-md  ml-4 ">
              <div className="flex gap-[16rem] pt-5 ml-4">
                <p>Platinum A</p>
                <div className=" flex gap-6 pt-2">
                  <p>Rp.2,800.000</p>

                  <div class="flex items-center border-gray-100">
                    <span class="cursor-pointer rounded-l bg-gray-400 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      -{' '}
                    </span>
                    <input
                      class="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span class="cursor-pointer rounded-r bg-gray-400 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      +{' '}
                    </span>
                  </div>
                </div>
              </div>

              <hr className=" pr-[16px] border-solid border-[#555486] mt-2 mb-2 " />

              <div className="flex ml-4">
                <p>View Details</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto sticky top-[8rem] border-solid border-[2px] border-[#555486] w-[300px] h-[170px] rounded-lg bg-white shadow-[#555486] shadow-xl dark:bg-neutral-700">
            <p className="text-center py-3 ">Total</p>
            <p className="text-center pb-3 font-bold">Rp.9.000.000</p>
            <Link href="/checkout">
              {' '}
              <button className=" bg-[#555486]  rounded-sm text-white w-[200px] h-[30px] mx-[50px]  hover:bg-blue-500  ">
                Buy Tickets
              </button>
            </Link>
            <div className="flex justify-center items-center pt-4 text-[#555486]  hover:text-blue-500">
              <Link href="/mycart" className='flex gap-2'>
                <p>Add to cart</p>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
