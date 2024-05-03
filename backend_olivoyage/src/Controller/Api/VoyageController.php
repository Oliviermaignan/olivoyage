<?php

namespace App\Controller\Api;

use App\Repository\VoyageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/voyage', name: 'api_voyage_')]
class VoyageController extends AbstractController
{

    #[Route('s', name: 'index')]
    public function index(VoyageRepository $voyageRepository): Response
    {
        $voyages = $voyageRepository->findAll();
        return $this->json(data: $voyages, context: ['groups' => 'api_voyage_index']);
    }

    //a modif plus tard
    // #[Route('/{nom}', name: 'show')]
    // public function show(Film $film): Response
    // {
    //     return $this->json($film, context: ['groups' => ['api_film_index','api_film_show']]);
    // }
    
        

}
