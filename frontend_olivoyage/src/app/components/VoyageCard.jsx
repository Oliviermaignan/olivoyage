'use client'

import Image from 'next/image'
import Link from 'next/link';
import path from 'path';


export default function VoyageCard(props) {

    return (
        <>
            {props.voyages.map((voyage, index) => (
                <div className="card m-4 p-1 w-25 voyageCard" id={voyage + index} key={index}>
                    
                    <div className='p-3'>
                    <Link href={"/voyages/" + voyage.nom} className='position-relative'> 
                        <Image 
                            src={'http://localhost:8000/images/'+voyage.image}
                            className='card-img-top position-relative'
                            alt="testImage"
                            fill
                            priority 
                            style={{objectFit:"contain"}}
                            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </Link>  
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{voyage.nom}</h5>
                        <p className="card-text">quick descrip aaaaaa</p>
                        <Link href={"/voyages/" + voyage.nom} className="btn btn-primary">
                        View voyage  🌍
                        </Link>
                    </div>
                </div>
                
            ))}
        </>
    )
}