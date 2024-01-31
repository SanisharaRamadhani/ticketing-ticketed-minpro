import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <>
        <div className=" flex justify-center items-center h-[400px] ">
        <Image src="/test.png" alt="groov" width={1071} height={272} />
      </div>
        </>
   );
};
export default Hero;




