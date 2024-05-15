'use client'

import Image from "next/image"


export default function Footer() {

    return (
        <>
        
        <footer 
        style={{
            backgroundColor: "#ffe357",
            boxShadow: "0px -5px 10px -5px rgba(0, 0, 0, 0.30)"
        }}
        >
                    <div className="d-flex flex-column text-center py-3">
                    <a className="navbar-brand mb-3" href="#">
                        <Image 
                        src="http://localhost:8000/images/logo.png" 
                        alt="Logo" 
                        width={75}
                        height={75}
                        priority
                        className="d-inline-block align-middle"/>
                        <span className="mx-4 fs-2">OliVoyage</span>
                    </a>
                        <div className="text-body-tertiary">
                            <p>Email: contact@olivoyage.com</p>
                        </div>
                    </div>
        </footer>

        </>
    )

}