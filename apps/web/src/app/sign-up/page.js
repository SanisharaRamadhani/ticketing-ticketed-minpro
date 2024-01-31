import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SignUp from '@/components/SignUp';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <SignUp />
        <Footer />
      </div>
    </>
  );
};

export default Home;
