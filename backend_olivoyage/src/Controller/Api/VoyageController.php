<?php

namespace App\Controller\Api;

use App\Entity\Voyage;
use App\Repository\VoyageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/voyage', name: 'api_voyage_')]
class VoyageController extends AbstractController
{

    #[Route('s', name: 'index')]
    public function index(VoyageRepository $voyageRepository): Response
    {
        $voyages = $voyageRepository->findAll();
        return $this->json(data: $voyages, context: ['groups' => 'api_voyage_index']);
    }


    #[Route('/{nom}', name: 'show')]
    public function show(Voyage $voyage): Response
    {
        return $this->json($voyage, context: ['groups' => ['api_voyage_index','api_voyage_show']]);
    }


    
}
