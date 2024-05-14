"use client"
import { useState } from "react";
import toast from 'react-hot-toast';


export default function ContactForm(){

    const [loading, setLoading] = useState(false); // État de chargement des données.
    const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
    const [data, setData]= useState('')

    async function handleSubmit(event){
        event.preventDefault();

        setLoading(true); // quand on fait appel a la fct chgmt setLoading to true
        setError(null);
        try {


            const formData = {
              nom : String(event.target.nom.value),
              prenom : String(event.target.prenom.value),
              email : String(event.target.email.value),
              objetMessage : String(event.target.objetMessage.options[event.target.objetMessage.selectedIndex].text),
              message : String(event.target.messageReservation.value)
            }
           
            const JSONFormData = JSON.stringify(formData);
        
            //je passe le nom dans l'url pour le récup côté serveur ce qui me permet de retrouver mon voyage
            const response = await fetch("http://127.0.0.1:8000/api/contact/new", 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', // Specify content type as JSON
              },
              body: JSONFormData,
            })
            if (!response.ok) {
              throw new Error("Erreur lors de l'envoi de la reservation")
            }
        
            //gestion de la réponse à finir
            setData(await response.json())
            toast.success("Merci pour votre message")
        
            // //reset des valeurs des champs
            // event.target.nom.value = "";
            // event.target.prenom.value = "";
            // event.target.email.value = "";
            // event.target.messageReservation.value = "";
        
            } catch (error) {
            //   // Capture the error message to display to the user
            //   setError(error.message)
              toast.error(error.message)
            } finally {
             setLoading(false)
            }


    }

    return(
        <>
        
        <h2 className="text-center py-5">Contactez-nous</h2>
        <form className="w-50 m-auto" id="reservationForm" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom :</label>
          <input 
          type="text" 
          className="form-control" 
          id="nom" 
          placeholder="Votre nom" 
          required
          maxLength={100}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prenom :</label>
          <input 
          type="text" 
          className="form-control" 
          id="prenom" 
          placeholder="Votre prénom"
          required
          maxLength={100}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input 
          type="email" 
          className="form-control" 
          id="email" 
          placeholder="Votre email"
          required
          maxLength={150}
          />
        </div>
        
        {/* objet du message */}
        <p>Message:</p>
        <div className="input-group my-1">
            <label className="input-group-text" htmlFor="objetMessage">Objet</label>
            <select className="form-select" id="objetMessage">
                <option defaultValue value="1">Question sur les voyages</option>
                <option value="2">Réclamation</option>
                <option value="3">Candidature spontamnée</option>
            </select>
        </div>


        <div className="mb-3">
          <textarea 
          className="form-control" 
          id="messageReservation" 
          rows={5} 
          maxLength={500}
          placeholder="Votre message ne doit pas dépasser 500 caractères"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mb-5 my-3 px-4 py-2" disabled={loading}>
        {loading ? 'Loading...' : "Envoyez"}
        </button>

      </form>


        </>
    )
}