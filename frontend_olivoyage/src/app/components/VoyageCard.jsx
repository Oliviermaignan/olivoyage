'use client'

import Image from 'next/image'
import path from 'path';


export default function VoyageCard(props) {


    console.log(props.voyages[0]);

    const imagePath = 'http://localhost:8000/images/' + props.voyages[0].image;
    return (
        <>
        <div className="card">
            <Image 
                src={imagePath}
                className="card-img-top"
                alt="testImage"
            />
            <div className="card-body">
                <h5 className="card-title">{props.voyages[0].nom}</h5>
                <p className="card-text">quick descrip</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    )

}