"use client"
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
const [categorie, setCategorie] = useState('');

// cet objet permet de "réunir" toutes les valeurs que je souhaite rendre access
// le contexte peut véhiculer tout types de valeur.
const contextValues = {
    categorie,
    setCategorie
}
// c'est l'attribut "value" qui va permettre de rendre accessible mon objet "con
return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}