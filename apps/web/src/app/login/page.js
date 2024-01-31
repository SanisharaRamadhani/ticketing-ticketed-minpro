import Login from '@/components/login';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import ListEvent from '@/components/ListEvent';
import Navbar from '@/components/Navbar';
import SignUp from '@/components/SignUp';
import ForgotPass from '@/components/ForgotPass';
import NavbarSide from '@/components/NavbarSide';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    </>
  );
};

export default Home;
