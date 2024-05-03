'use client'


export default function Navbar() {

    return (
        <>
        
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="d-flex justify-content-between">
                <a className="navbar-brand m-3" href="#">OliVoyage</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
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
        </nav>


        </>
    )

}