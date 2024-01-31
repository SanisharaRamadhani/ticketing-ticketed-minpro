import Details from '@/components/Details';
import Discovery from '@/components/Discovery';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Navbarsec from '@/components/Navbarsec';
import Navbartri from '@/components/Navbartri';
import Ticket from '@/components/Ticket';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-center mx-auto text-center pt-10 ">
        <p className="text-2xl text-[#555486]">
          Congratulation you got your ticket !
        </p>
        <div className=" flex justify-center items-center h-[400px] ">
          <Image src="/yey.png" alt="groov" width={200} height={272} />
        </div>
        <p>Tickets have been sent to</p>
        <p className="text-[#555486] py-5">Sanishara@gmail.com</p>
        <p className='py-5'>Haven’t received tickets yet?</p>
        <button className="border bg-white px-2 py-2 border-[#555486] rounded-md">
          Resend Ticket
        </button>
        <p className='py-5'>Having trouble receiving the tickets?</p>
        
          <p className='text-[#555486] pb-10'>ticketed@gmail.com</p>
        
      <Footer />
    </div>
    </div>
  );
};

export default Home;
