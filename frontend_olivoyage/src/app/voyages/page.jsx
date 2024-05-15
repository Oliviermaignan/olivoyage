'use client'

import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VoyageCard from "../components/VoyageCard";
import './page.css';
import FiltersBar from "../components/FiltersBar";
import { AppContext } from "../AppContext";

export default function Voyages(props) {

    // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
    const [loading, setLoading] = useState(true); // État de chargement des données.
    const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
    const [data, setData] = useState(null); // Stockage des données reçues du fetch.
    const [uniqueCategorie, setUniqueCategorie] = useState([]);
    const [filteredData, setFilteredData] = useState(null); //je vais stocker mes voyagesIci
    

    const context = useContext(AppContext);

    useEffect(()=>{
        if(data){
            setFilteredData(data.filter((voyage)=> voyage.categorie[0].nom === context.categorie))
        }
    }, [context.categorie])

    useEffect(() => {
        // Déclenchement de la récupération des données de personnages au montage du composant.
        try {
        fetch(
            "http://127.0.0.1:8000/api/voyages"
        )
            .then((response) => response.json()) // Transformation de la réponse en JSON.
            .then((data) => {
            setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
            setData(data); // Enregistrement des données reçues dans l'état 'data'.
            setFilteredData(data);

            //recuperation des categories
            let categoriesArray = data.map(voyage => 
                voyage.categorie[0].nom
            );
            //la fonction Set permet d'avoir que des valeurs uniques dans mon tableau
            setUniqueCategorie(new Set(categoriesArray));
            });
        } catch (error) {
            setError(true); // Enregistrement de l'erreur dans l'état 'error'.
            setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
        }
    }, []);


    return (
        <>
        
        <Navbar/>
            <main className="bg-light">

                {loading && !error && <><div>Données en cours de chargement !</div></>}
                {/* Affichage conditionnel en fonction de l'état du chargement et des erreurs */}
                {!loading && !error && data && (
                <>
                <FiltersBar categories={uniqueCategorie}/>
                <div className="d-flex flex-wrap justify-content-center" id="voyageCardContainer">
                <VoyageCard voyages={filteredData}/>
                </div>
                </>
                )}
                {!loading && error && <div>Une erreur est survenue</div>}
            </main>
        <Footer/>

        </>
    )

}