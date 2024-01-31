import Footer from '@/components/Footer';
import ForgotPass from '@/components/ForgotPass';
import Navbar from '@/components/Navbar';
import SignUp from '@/components/SignUp';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <ForgotPass />
        <Footer />
      </div>
    </>
  );
};

export default Home;
