import Image from 'next/image';
import Link from 'next/link';

const Offers = () => {
    return (
   
    
    <>
      {/* hot offers */}

      {/* hot offers */}
      <div className=" grid grid-cols-2  px-10 pb-[50px]  pt-[50px]">
        <div className="font-bold text-xl">Hot Offers </div>
        <div className="flex justify-end ">
          <h>View all</h>
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

      <div className="flex justify-center items-center gap-5">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <image class="rounded-t-lg" src="/discon1.png" alt="" />
        </div>

        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <image class="rounded-t-lg" src="/discon2.png" alt="" />
        </div>
      </div>
      

    </>
 );
};
export default Offers;