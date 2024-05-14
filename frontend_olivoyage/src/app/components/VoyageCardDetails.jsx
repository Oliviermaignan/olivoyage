'use client'

import Image from 'next/image'
import Link from 'next/link';
import './voyageCardDetails.css'

export default function VoyageCardDetails(props) {

    let dateDepart = new Date(props.dateDepart)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    dateDepart = dateDepart.toLocaleDateString('fr-FR', options);

    let dateFin = new Date(props.dateFin)

    dateFin = dateFin.toLocaleDateString('fr-FR', options);



    return (
        <>
        <div id="cardDetailsContainer" className="horizontal-card d-flex bg-light">
            <div className="m-auto w-50 h-75 d-inline-block" id="cardDetailsImg">
                <Image
                    src={'http://localhost:8000/images/'+props.image}
                    fill={true}
                    objectFit='cover'
                    className='position-relative py-5 px-5'
                    alt={'image de' + props.nom}
                />
            </div>

            <div className="w-50 p-3 bg-light py-5 my-auto px-5" id="cardDetailsText">

                <h1>{props.nom}</h1>

                {props.categorie.map((categorie, index)=>(
                    <div key={index} className='p-2'>
                        <span className="badge bg-info-subtle text-dark fs-4">{categorie.nom}</span>
                    </div>
                ))}

                <p>Pour {props.nombreVoyageurs} personnes</p>
                <div>

                    <p>date de départ : <span className='fw-semibold'>{dateDepart}'</span></p>
                    
                </div>
                <div>

                    <p>date de fin : <span className='fw-semibold'>{dateFin}</span></p>
                    
                </div>

                <p>
                   pays : {props.pays}
                </p>
                <p>
                    prix : {props.prix} €
                </p>
            <div id='cardDetailsBtnContainer'>
                <Link href="#reservationForm" className='btn btn-success me-3 cardDetailsBtnReserver'>Réserver</Link>
                <Link href="/voyages" className='btn btn-primary' id="cardDetailsBtnRetour">Retour</Link>
            </div>
            </div>
        </div>
        </>
    )
}