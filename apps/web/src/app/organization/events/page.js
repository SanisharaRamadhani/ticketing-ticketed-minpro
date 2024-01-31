import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Ticket from '@/components/Ticket';
import Checkout from '@/components/checkout';
import ListEvent from '@/components/ListEvent';
import Image from 'next/image';
import Link from 'next/link';
import NavbarOrg from '@/components/NavbarOrg';
import NavbarSide from '@/components/NavbarSide';

const Home = () => {
  return (
    <>
      <div>
        <NavbarOrg />
        <ListEvent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
