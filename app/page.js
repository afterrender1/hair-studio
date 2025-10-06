import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import WhoWeAre from "@/components/whoweare";
import LearnWithUs from "@/components/Learnwithus";
export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <WhoWeAre/>
  <LearnWithUs/>
  </>
  );
}
