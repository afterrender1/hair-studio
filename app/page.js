import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import WhoWeAre from "@/components/whoweare";
import LearnWithUs from "@/components/Learnwithus";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Services/>
  <WhoWeAre/>
  <LearnWithUs/>
  <Testimonials/>
  </>
  );
}
