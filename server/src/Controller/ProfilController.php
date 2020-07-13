<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Profil;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProfilController extends Controller
{
    /**
     * @Route("/profil", name="create_profil")
     */
    public function createProduct(): Response
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to the action: createProduct(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();

        $profil = new Profil();
        $profil->setFamilyName('Battaglia');
        $profil->setFirstName('Fiona');
        $profil->setStatus('Recherche un contrat de professionnalisation');
        $profil->setDomaines('Front-End');

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($profil);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new profil with id '.$profil->getId());
    }

    /**
    * @Route("/profil/{id}", name="profil_show")
    */
    public function show($id)
    {
        $profil = $this->getDoctrine()
            ->getRepository(Profil::class)
            ->find($id);

        return new JsonResponse(
            [
                'Access-Control-Allow-Origin' => '*',
                'Access-Control-Allow-Credentials' => 'true',
                'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers' => 'DNT, X-User-Token, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type',
                'Access-Control-Max-Age' => 1728000,
                'Content-Type' => 'text/plain charset=UTF-8',
                'Content-Length' => 0,
                'Nom de Famille' => $profil->getFamilyName(),
                'Prenom' => $profil->getFirstName(),
                //'Date de Naissance' => $profil->getBirthDate(),
                'Status' => $profil->getStatus(),
                'Domaine' => $profil->getDomaines()
            ]
            
        );

        // or render a template
        // in the template, print things with {{ product.name }}
        // return $this->render('product/show.html.twig', ['product' => $product]);
    }

}
