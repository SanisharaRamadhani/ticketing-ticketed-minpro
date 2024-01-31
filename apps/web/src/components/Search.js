import Image from "next/image"
import Link from "next/link"

const Search = () => {
    return (
   
        <>
        {/* filter utama? */}
      <div className="flex items-center justify-center pb-[36px]">
        <div className=" w-[900px] h-[140px] bg-white border border-[#555486] flex justify-center items-center rounded-[16px] right-[100px] shadow-md">
          <div className="grid grid-cols-3 gap-[50px] ">
            {/* seach */}
            <div>
              <div className="px-4">Search Event</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Concert"
                  class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className=" pr-[16px] border-solid border-gray-400 w-[200px]" />
            </div>
           

            {/* place */}
            <div>
              <div className=" px-4">Place</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jakarta"
                  class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className="border-solid border-gray-400 w-[200px]" />
            </div>

            {/* time */}

            <div>
              <div className=" px-4">Date</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className="border-solid border-gray-400 w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      
        </>
   );
};
export default Search;




