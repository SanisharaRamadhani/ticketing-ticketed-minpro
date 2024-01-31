import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50 shadow-md ">
        <div className=" m-auto max-w-[1260px] h-[100px]  flex items-center justify-center gap-[130px]">
          <div className=" font-bold">
            <Link href="/">
              <p className="text-[#555486] text-[20px] pr-[50px]">TICKETED</p>
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-10  md:text-[20px] sm:text-[15px] text-[12px] me-1 text-[#555486] sm:mr-1">
              <Link href="/">
                {' '}
                <li className="cursor-pointer hover:text-blue-300">Concerts</li>{' '}
              </Link>
              <Link href="/about" className="cursor-pointer hover:text-blue-300">
                <li>Trips</li>
              </Link>
              <Link href="/servis">
                <li className="cursor-pointer hover:text-blue-300 ">Attraction</li>
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointe hover:text-blue-300">Beauty</li>{' '}
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointer hover:text-blue-300">Hobby</li>{' '}
              </Link>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div class="flex-initial">
              <div class="flex justify-end items-center relative">
                <div class="flex mr-4 items-center gap-2">
               <Link
                    class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full text-[#555486]"
                    href="/create"
                  >
                    <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                      Create Event
                    </div>
                    
                  </Link>
               <Link
                    class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full text-[#555486]"
                    href="/mycart">
                    

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/></svg>
                  </Link>
               <Link
                    class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full text-[#555486]"
                    href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
