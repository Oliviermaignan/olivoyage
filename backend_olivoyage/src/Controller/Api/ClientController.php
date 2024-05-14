<?php

namespace App\Controller\Api;

use App\Entity\Client;
use App\Entity\Statut;
use App\Repository\StatutRepository;
use App\Repository\VoyageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/client/', name: 'app_api_client_')]
class ClientController extends AbstractController
{
    #[Route('new/{voyageNom}', name: 'new')]
    public function new(
        Request $request, 
        EntityManagerInterface $em, 
        SerializerInterface $serializer, 
        ValidatorInterface $validator, 
        StatutRepository $statutRepo,
        VoyageRepository $voyageRepo
        ): Response
    {

        // On commence par récupérer les données grâce à $request()->getContent()
        // Ensuite, on deserialize le json, pour recomposer un objet film, en ne remplissant que les champs autorisés par le groupe :
        $client = $serializer->deserialize($request->getContent(), Client::class,'json', ["groups" => "api_client_new"]);

        $errors = $validator->validate($client);

        // S'il y a des erreurs, on s'arrête là et on retourne les erreurs à l'envoyeur :
        if ($errors->count()) {
            $messages = [];
            foreach ($errors as $error) {
            $messages[] = $error->getMessage();
            }
            return $this->json($messages, Response::HTTP_UNPROCESSABLE_ENTITY);
        }else {
            //pour rentrer le statut dans lobj client
            $statut = $statutRepo->findBy(['type' => 'non lu']);

            $voyageNom = $request->attributes->get('voyageNom');

            $voyage = $voyageRepo->findBy(['nom' => $voyageNom]);


            $client->setStatut($statut[0]);
            $client->setVoyage($voyage[0]);


            $em->persist($client);
            $em->flush();
            
            
            return $this->json(data: true);
            
        }


    }
}
