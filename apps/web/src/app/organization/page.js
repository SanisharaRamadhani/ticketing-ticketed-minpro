import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Ticket from '@/components/Ticket';
import Checkout from '@/components/checkout';
import ListEvent from '@/components/ListEvent2';
import Image from 'next/image';
import Link from 'next/link';
import NavbarOrg from '@/components/NavbarOrg';
import NavbarSide from '@/components/NavbarSide';
import HomeOrg from '@/components/HomeOrg';

const Home = () => {
  return (
    <>
      <div>
        <NavbarOrg />
        <Footer />
      </div>
    </>
  );
};

export default Home;
