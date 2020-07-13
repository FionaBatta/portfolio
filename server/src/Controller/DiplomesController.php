<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Diplomes;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class DiplomesController extends Controller
{
    /**
     * @Route("/diplomes/{id}", name="diplomes")
    */
    public function show($id)
    {
        $diplomes = $this->getDoctrine()
            ->getRepository(Diplomes::class)
            ->find($id);

        return new JsonResponse(
            [
                'Nom de Famille' => $diplomes->getNom(),
                'Prenom' => $diplomes->getPlace(),
                'Status' => $diplomes->getDate(),
                'Domaine' => $diplomes->getOptions()
            ]
            
        );
    }

    /**
    * @Route("/diplomes", name="diplomes_all")
    */
    public function showall()
    {
        $diplomes = $this->getDoctrine()
            ->getRepository(Diplomes::class)
            ->findAll();

        $arrayCollection = array();

        foreach($diplomes as $item) {
            $arrayCollection[] = array(
                'Nom' => $item->getNom(),
                'Place' => $item->getPlace()
            );
        }

        return new JsonResponse(
            $arrayCollection
        );
    }
}
