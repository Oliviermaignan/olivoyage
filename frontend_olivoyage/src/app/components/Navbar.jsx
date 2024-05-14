'use client'

import Image from "next/image"
import Link from "next/link"


export default function Navbar() {

    return (
        <>
        
        
        {/* <nav 
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.25)"}}
        >
            <div className="d-flex flex-row justify-content-between">

                <a className="navbar-brand m-3" href="#">OliVoyage</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/voyages">Nos Voyages</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav> */}


        <nav 
        className="navbar navbar-expand-lg py-3"
        style={{
            backgroundColor: "#ffe357",
            boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.25)"
        }}
        >
            <div className="container-fluid">
            <a className="navbar-brand mx-4" href="#">
                <Image 
                src="http://localhost:8000/images/logo.png" 
                alt="Logo" 
                width={75}
                height={75}
                className="d-inline-block align-middle"/>
                <span className="mx-4 fs-2">OliVoyage</span>
            </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end mx-5 align-middle" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link href="/" className="nav-link active fs-3 mx-2" aria-current="page">Accueil</Link>
                    </li>
                    <li className="nav-item ">
                    <Link href="/voyages" className="nav-link active fs-3 mx-2" aria-current="page">Nos Voyages</Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/contact" className="nav-link active fs-3 mx-2" aria-current="page">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        </>
    )

}
