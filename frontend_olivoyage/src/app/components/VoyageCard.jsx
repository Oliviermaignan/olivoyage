'use client'

import Image from 'next/image'
import path from 'path';


export default function VoyageCard(props) {


    console.log(props.voyages[0]);

    const imagePath = 'http://localhost:8000/images/' + props.voyages[0].image;
    return (
        <>
            {props.voyages.map((voyage, index) => (
                <div className="card m-1" id={voyage + index} key={index}>
                        <Image 
                            src={'http://localhost:8000/images/'+voyage.image}
                            className='card-img-top position-relative'
                            alt="testImage"
                            fill={true}
                            objectFit='contain'
                        />
                    
                    <div className="card-body">
                        <h5 className="card-title">{voyage.nom}</h5>
                        <p className="card-text">quick descrip aaaaaa</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </>
    )
}