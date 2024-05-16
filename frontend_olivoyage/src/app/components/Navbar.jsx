'use client'

import Image from "next/image"
import Link from "next/link"


export default function Navbar() {

    return (
        <>
        <nav 
        className="navbar navbar-expand-lg py-3"
        style={{
            backgroundColor: "#ffe357",
            boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.25)"
        }}
        >
            <div className="container-fluid">
            <a className="navbar-brand mx-4" href="/">
                <Image 
                src="http://localhost:8000/images/logo.png" 
                alt="Logo" 
                width={75}
                height={75}
                priority
                className="d-inline-block align-middle"/>
                <span className="mx-4 fs-2">OliVoyage</span>
            </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end mx-5 align-middle" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
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
