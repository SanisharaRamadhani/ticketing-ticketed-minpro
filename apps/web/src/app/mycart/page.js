import Cart from "@/components/Cart";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ticket from "@/components/Ticket";
import Nocart from "@/components/nocart";
import Image from "next/image";
import Link from "next/link";

const Mycart = () => {
  return (
    <>
      <div>
        <Navbar />
        <Nocart />
        <Cart/>
      </div>
      <Footer />
    </>
  );
};

export default Mycart;
