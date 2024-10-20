import Image from "next/image";
import Navbar from "./Components/Header";
import Header from "./Components/Header";
import Link from "next/link";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Footer/>
      
    </div>

  )

}