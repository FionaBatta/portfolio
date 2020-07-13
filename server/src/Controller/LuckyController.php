<?php
// src/AppBundle/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\Mapping as ORM;

class LuckyController
{
    /**
     * @Route("/")
     */
    public function numberAction()
    {
        $number = random_int(0, 100);

        return new JsonResponse(array(
            'Lucky number: '=> $number
        ));
    }
}
