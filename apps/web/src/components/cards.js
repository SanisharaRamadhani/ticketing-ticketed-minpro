import Image from "next/image";
import Link from "next/link";


const Cards = () => {
    return (
        <>
        <Link href="/event" className="cursor-pointer" >
        <div  class="cursor-pointers block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg"
              src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
              alt="hdh"
            
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
        </>
   );
};
export default Cards;





