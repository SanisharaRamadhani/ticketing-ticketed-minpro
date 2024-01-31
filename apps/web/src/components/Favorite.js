import Image from 'next/image';
import Link from 'next/link';

const Favorite = () => {
    return (
   
    <>
      <div className=" grid grid-cols-2  px-10 pb-[50px]  pt-[50px]">
        <div className="font-bold text-xl">All time Favorite </div>
        <div className="flex justify-end ">
          <Link href="/ticket"> <h>View all</h></Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
          </svg>
        </div>
      </div>

      <div class="flex justify-center items-center gap-5 pb-[50px]">
        <image  class="rounded-t-lg" src="/experience.png" alt="" />
        <image class="rounded-t-lg" src="/experience.png" alt="" />
        <image class="rounded-t-lg" src="/experience.png" alt="" />
      </div>
    </>
  );
};
export default Favorite;