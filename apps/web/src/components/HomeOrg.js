import Image from 'next/image';
import Link from 'next/link';
import { RiPencilFill } from 'react-icons/ri';

const HomeOrg = () => {
  return (
    <>
      {/* dashboard organizer */}
      <div className="px-[200px] pt-[150px]">
        <div className="font-extrabold text-8xl pt-5">Hello, ORG.</div>
      </div>
      <div className="px-[200px] my-[100px] h-[400px] ">
        <div className="border h-[350px] w-[400px] bg-slate-200">
          <div className=" text-center items-center">
            <div className="h-[100px]  text-6xl px-[190px] py-5 ">
              <RiPencilFill className="text-red-800 rounded-full border-4 border-rose-300" />
            </div>
            <div className="my-5">Start from scratch</div>
            <div className="my-5">
              Add all your event details, create new tickets, and set up
              recurring events
            </div>
            <Link
              href="/organization/events/create-event"
              className="cursor-pointer"
            >
              <div className="py-2 mx-20 border-4 border-rose-300">
                Create Event
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeOrg;
