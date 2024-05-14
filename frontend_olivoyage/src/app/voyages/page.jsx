'use client'

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VoyageCard from "../components/VoyageCard";
import './page.css';

export default function Voyages(props) {

    // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
    const [loading, setLoading] = useState(true); // État de chargement des données.
    const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
    const [data, setData] = useState(null); // Stockage des données reçues du fetch.
    
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
            });
        } catch (error) {
        setError(true); // Enregistrement de l'erreur dans l'état 'error'.
        setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
        }
    }, []);

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <>
        
        <Navbar/>
            <main className="bg-light">
                {/* les filtres pour voyages */}
                <div className="filtersContainer p-3 d-flex justify-content-center">
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Catégories
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                {/* Affichage conditionnel en fonction de l'état du chargement et des erreurs */}
                {loading && !error && <><div>Données en cours de chargement !</div></>}
                {!loading && !error && data && (
                <>
                <div className="d-flex flex-wrap justify-content-center" id="voyageCardContainer">
                <VoyageCard voyages={data}/>
                </div>
                </>
                )}
                {!loading && error && <div>Une erreur est survenue</div>}
            </main>
        <Footer/>

        </>
    )

}