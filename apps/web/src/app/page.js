import Concert from '@/components/Concert';
import Details from '@/components/Details';
import Event from '@/components/Event';
import Favorite from '@/components/Favorite';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Offers from '@/components/Offers';
import Search from '@/components/Search';
import Ticket from '@/components/Ticket';

import Trips from '@/components/Trips';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Search />
        <Event />
        <Favorite />
        <Offers />
        <Concert />
        <Trips />
        <Footer />
      </div>
    </>
  );
};

export default Home;
