"use client";

import { useEffect, useState} from "react";
import toast from 'react-hot-toast'


export default function ReservationForm(props) {
  console.log(props);
  // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
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
      message : String(event.target.messageReservation.value),
    }
    const JSONFormData = JSON.stringify(formData);

    const response = await fetch("http://127.0.0.1:8000/api/client/new/" + props.nom, 
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
    toast.success("Merci pour votre réservation")

    event.target.nom.value = "";
    event.target.prenom.value = "";
    event.target.email.value = "";
    event.target.messageReservation.value = "";

    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
      toast.error('erreur')
    } finally {
      setLoading(false)
    }


  }

  return (
    <div className="bg-warning-subtle">

    {error && <div style={{ color: 'red' }}>{error}</div>}

      <h2 className="text-center py-5">Reservez mon {props.nom}</h2>
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

        <div className="mb-3">
          <label htmlFor="messageReservation" className="form-label">Vos remarques :</label>
          <textarea 
          className="form-control" 
          id="messageReservation" 
          rows={4} 
          maxLength={500}
          placeholder="Avez-vous une remarque concernant votre réservation ?"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mb-5 my-3 px-4 py-2" disabled={loading}>
        {loading ? 'Loading...' : "let's go"}
        </button>

      </form>
      </div>
  )
}