import Image from 'next/image';
import Link from 'next/link';
import SideFilter from './SideFilter';
import Cards from './cards';
import Next from './next';

const Discovery = () => {
  return (
    <>
      <div class="flex">
        <div class="md:flex w-2/5 md:w-1/4 bg-white border-r hidden">
          <div class="mx-auto py-10">
            <SideFilter />
          </div>
        </div>

        <div class=" ml-6">
          <p class="my-6 text-xl">Search results for “Upcoming Events”</p>
          <div className="flex gap-4 pb-10">
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="flex gap-4 pb-10 ">
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div>
            <Next />
          </div>
        </div>
      </div> 
    </>
  );
};
export default Discovery;
