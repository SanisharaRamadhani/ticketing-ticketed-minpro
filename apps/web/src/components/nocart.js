import Image from "next/image"
import Link from "next/link"

const Nocart = () => {
    return (
        <>
        <div className="pb-10 pt-10 ">
         <p className="text-center text-3xl text-[#555486]"> There's Nothing Here </p>  
        <div className="flex justify-center items-center h-[400px] ">
        <Image src="/nocart.png" alt="groov" width={300} height={272} />
      </div>
      <div className="flex justify-center items-center">
      <Link href="/">
      <button className="bg-[#555486] border rounded-md px-8 py-2  text-white ">Shop Now ! </button>
     </Link>
      </div> </div>
        </>
   );
};
export default Nocart;




