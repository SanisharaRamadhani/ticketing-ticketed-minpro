import Createevent from "@/components/Createevent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


const Creat = () => {
    return (
      <>
        <div>
          <Navbar />
          <Createevent />
          <Footer />
        </div>
      </>
    );
  };
  
  export default Creat;
  