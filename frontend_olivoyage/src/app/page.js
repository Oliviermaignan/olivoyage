'use client'
import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {



  return (
    <>
     <Navbar/>
     <main>
        <h1 className="text-align">landing page WiP</h1>
      </main>
      <Footer/>
    </>
  );
}
