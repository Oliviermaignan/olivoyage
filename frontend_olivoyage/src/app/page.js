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
        {/* Affichage conditionnel en fonction de l'état du chargement et des erreurs */}
        {loading && !error && <><div>Données en cours de chargement !</div></>}
        {!loading && !error && data && (
        <>
        <div className="bg-warning">{data[0].id}</div>
        </>
        )}
        {!loading && error && <div>Une erreur est survenue</div>}
      </main>
      <Footer/>
    </>
  );
}
