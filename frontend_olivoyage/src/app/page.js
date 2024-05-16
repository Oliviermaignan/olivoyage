'use client'
import Image from "next/image";
import styles from "./page.module.css";
import './page.css'

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <>
     <Navbar/>
     <main>
     <Link href={"/voyages"} className='position-relative'> 
     <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner bg-light p-5 ">
          <div id="carouselSizing" className="carousel-item active position-relative" style={{height: '600px'}}>

            <Image 
              src="http://localhost:8000/images/amsterdam.jpg" 
              fill
              objectFit="contain"
              priority 
            />

            <div class="carousel-caption d-none d-md-block">
              <p className="w-100 rounded fw-bolder text-black fs-1 bg-light bg-gradient p-2 text-dark bg-opacity-50">Amsterdam</p>
            </div>

          </div>
          <div className="carousel-item position-relative" style={{height: '600px'}}>

            <Image 
            src="http://localhost:8000/images/islande.jpg" 
            fill
            objectFit="contain"
            priority />

            <div class="carousel-caption d-none d-md-block">
              <p className="w-100 rounded fw-bolder text-black fs-1 bg-light bg-gradient p-2 text-dark bg-opacity-50">
                Islande
              </p>
            </div>

          </div>
          <div className="carousel-item position-relative" style={{height: '600px'}}>

            <Image 
                src="http://localhost:8000/images/anvers.jpg" 
                fill
                objectFit="contain"
                priority 
            />

            <div class="carousel-caption d-none d-md-block">
              <p className="w-100 rounded fw-bolder text-black fs-1 bg-light bg-gradient p-2 text-dark bg-opacity-50">
                Anvers
              </p>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </Link>
      </main>
      <Footer/>
    </>
  );
}
