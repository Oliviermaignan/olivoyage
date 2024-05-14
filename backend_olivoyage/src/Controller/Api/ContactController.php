<?php

namespace App\Controller\Api;

use App\Entity\Contact;
use App\Repository\StatutRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/contact', name: 'api_contact_')]
class ContactController extends AbstractController
{
    #[Route('/new', name: 'new')]
    public function index(
        Request $request, 
        EntityManagerInterface $em, 
        SerializerInterface $serializer, 
        ValidatorInterface $validator,
        StatutRepository $statutRepo
        ): Response
    {

        // On commence par récupérer les données grâce à $request()->getContent()
        // Ensuite, on deserialize le json, pour recomposer un objet contact, en ne remplissant que les champs autorisés par le groupe :
        $contact = $serializer->deserialize($request->getContent(), Contact::class,'json', ["groups" => "api_contact_new"]);

        $errors = $validator->validate($contact);

        // S'il y a des erreurs, on s'arrête là et on retourne les erreurs à l'envoyeur :
        if ($errors->count()) {
            $messages = [];
            foreach ($errors as $error) {
            $messages[] = $error->getMessage();
            }
            return $this->json($messages, Response::HTTP_UNPROCESSABLE_ENTITY);
        }else {
            //pour rentrer le statut dans lobj contact
            $statut = $statutRepo->findBy(['type' => 'non lu']);

            $contact->setStatut($statut[0]);
 

            $em->persist($contact);
            $em->flush();
            
            
            return $this->json(data: true);
            
        }

    }
}
