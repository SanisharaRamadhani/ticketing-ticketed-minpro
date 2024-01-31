import Image from 'next/image';
import Link from 'next/link';

const Details = () => {
  return (
    <>
      <div className="mb-8">
        <Image
          src="/taylor.jpeg"
          alt="groov"
          width={900}
          height={100}
          className="blur-[2px] relative mx-auto "
        />
      </div>
      <Image
        src="/taylor.jpeg"
        alt="groov"
        width={500}
        height={100}
        className="absolute inset-y-[200px] inset-x-[450px] border shadow-sm"
      />

      <div className="flex">
        <div>
          <div className=" pl-[100px] pb-8 ">
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

            <div className="flex gap-2 pb-[16px]">
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

            <div className=" w-[600px] pb-[16px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque nisl, volutpat nec pharetra volutpat, finibus et turpis.
                Proin at sollicitudin enim. Vivamus rutrum vehicula sapien, et
                iaculis mi imperdiet eget. In ac lorem dapibus, commodo eros id,
                suscipit erat. Sed quam ipsum, sollicitudin in molestie nec,
                tempus sed purus. Aenean mattis, orci et blandit lobortis, massa
                massa cursus odio,
              </p>
            </div>
          </div>

          <div className="pl-[100px] pb-8 w-[600px] ">
            <p className=" pb-4 font-bold text-xl">Event Rules</p>
            <p>1. Lorem ipsum dolor sit amet</p>
            <p>2. Lorem ipsum dolor sit amet</p>
            <p>3. Lorem ipsum dolor sit amet</p>
            <p>4. Lorem ipsum dolor sit amet</p>
          </div>

          <div className="pl-[100px] pb-8 w-[600px]">
            <p className=" pb-4 font-bold text-xl">Benefits</p>
            <p>1. Lorem ipsum dolor sit amet</p>
            <p>2. Lorem ipsum dolor sit amet</p>
            <p>3. Lorem ipsum dolor sit amet</p>
            <p>4. Lorem ipsum dolor sit amet</p>
          </div>

          <div className="pl-[100px] pb-8 ">
            <p className=" pb-4 font-bold text-xl">Lokasi</p>
            <div className="">
              <Image
                src="/maps.JPG"
                alt="groov"
                width={500}
                height={50}
                className=""
              />
            </div>
          </div>

          <div className="pl-[100px] pb-8 ">
            <p className=" pb-4 font-bold text-xl">Review</p>

            <div className="flex gap-[50px] pb-8">
              <p className="text-7xl">4,5</p>
              <p className="mt-10">Dari 100 review</p>
            </div>

            <div className="block w-[400px] h-[150px] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="px-4 py-4 ">
                <p className="pb-2">5,0/5</p>
                <p className="pb-2">james nuga</p>
                <p className="text-gray-500">i cant wait to watch this</p>
              </div>
            </div>
          </div>
        </div>

        


        <div className="mx-auto sticky top-[8rem]  border-solid border-[2px] border-[#555486] w-[300px] h-[160px] rounded-lg bg-white shadow-[#555486] shadow-xl dark:bg-neutral-700">
          <p className="text-center py-3 ">Start From</p>
          <p className="text-center pb-3 font-bold">Rp.0</p>
          <Link href="/mycart">
            {' '}
            <button className=" bg-[#555486]  rounded-sm text-white w-[200px] h-[30px] mx-[50px] ">
              Select Tickets
            </button>
          </Link>

          <div className="flex gap-2 mx-[51px] mt-[10px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
              />
            </svg>
            <p>Share Via:</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </div>
        </div>



      </div> 
    
    </>
  );
};
export default Details;
