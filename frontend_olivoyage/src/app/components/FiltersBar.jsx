"use client";

// import { Dropdown } from "bootstrap";
import { AppContext } from "@/app/AppContext";
import { useContext } from "react";

export default function FiltersBar(props){

    //je met les categories dans un nouveau tableau car il vient d'une collection set
    let categories = [...props.categories]
    
    const context = useContext(AppContext);

    let categoriesListItem = categories.map((categorie, index)=>(
        
        <li key={index}><p className="dropdown-item" onClick={()=> {context.setCategorie(categorie)}
        }>{categorie}</p></li>

    ))



    return (
        <>
        {/* les filtres pour voyages */}
        <div className="filtersContainer p-5 d-flex justify-content-center">
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Catégories
                </button>
                <ul className="dropdown-menu">

                {categoriesListItem}

                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Prix
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Date
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                    <li><a className="dropdown-item" href="#">WIP</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}