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
    <>
      <div>
        <Navbarsec />
        <Discovery />
        <Footer />
      </div>
    </>
  );
};

export default Home;
