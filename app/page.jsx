"use client"; // to import client side only modules
// import LocomotiveScroll from "locomotive-scroll";

import Image from "next/image";
import { useEffect } from "react";
import Hero from "./components/Hero";
import FAQ from "./components/Faq";


export default function Home() {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);
  return (
   <Hero />
  );
}