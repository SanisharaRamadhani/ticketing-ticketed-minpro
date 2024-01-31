import Image from "next/image";
import Link from "next/link";


const Next = () => {
    return (
        <>
         <div class="flex  items-center justify-center pb-10">
  <div class="flex select-none space-x-1 text-gray-700">
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </Link>
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 1 </Link>
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 2 </Link>
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 3 </Link>
    <span class="rounded-md px-4 py-2"> ... </span>
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 10 </Link>
    <Link href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Next </Link>
  </div>
  </div>
        </>
   );
};
export default Next;





