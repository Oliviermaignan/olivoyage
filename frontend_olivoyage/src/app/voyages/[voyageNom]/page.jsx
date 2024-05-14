'use client'

import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import ReservationForm from "@/app/components/ReservationForm";
import VoyageCardDetails from "@/app/components/VoyageCardDetails";
import { useEffect, useState } from "react";


export default function VoyageDetails(props) {
// Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
const [loading, setLoading] = useState(true); // État de chargement des données.
const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
const [data, setData] = useState(null); // Stockage des données reçues du fetch.

useEffect(() => {
    // Déclenchement de la récupération des données de personnages au montage du composant.
    try {
      fetch(
        "http://127.0.0.1:8000/api/voyage/" + props.params.voyageNom
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
  }, []); // Le tableau vide indique que cet effet ne s'exécute qu'au montage.

    return (
        <>
            <Navbar/>
            {loading && !error && <div>Données en cours de chargement !</div>}
            {data && 
            <>
            <VoyageCardDetails
            dateDepart={data.dateDepart}
            dateFin={data.dateFin}
            nom={data.nom}
            pays={data.pays}
            prix={data.prix}
            nombreVoyageurs={data.nombreVoyageurs}
            image={data.image}
            categorie={data.categorie}
            />
            <ReservationForm
            nom={data.nom}
            id={data.id}
            />
            </>
            }
            {!loading && error && <div>Une erreur est survenue</div>}
            <Footer/>
        </>
    )
}