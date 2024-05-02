'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

    // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
    const [loading, setLoading] = useState(true); // État de chargement des données.
    const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
    const [data, setData] = useState(null); // Stockage des données reçues du fetch.
  
    useEffect(() => {
      // Déclenchement de la récupération des données de personnages au montage du composant.
      try {
        fetch(
          "http://127.0.0.1:8000/voyages"
        )
          .then((response) => response.json()) // Transformation de la réponse en JSON.
          .then((data) => {
            setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
            setData(data); // Enregistrement des données reçues dans l'état 'data'.
          });
      } catch (error) {
        setError(true); // Enregistrement de l'erreur dans l'état 'error'.
        setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
      }
    }, []);



  return (
    <>
     <div>{data}</div>
    </>
  );
}
