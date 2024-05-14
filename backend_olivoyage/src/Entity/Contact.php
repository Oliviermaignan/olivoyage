<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('api_contact_new')]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups('api_contact_new')]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    #[Groups('api_contact_new')]
    private ?string $objetMessage = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups('api_contact_new')]
    private ?string $email = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups('api_contact_new')]
    private ?string $message = null;

    #[ORM\ManyToOne(inversedBy: 'contacts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?statut $statut = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getObjetMessage(): ?string
    {
        return $this->objetMessage;
    }

    public function setObjetMessage(string $objetMessage): static
    {
        $this->objetMessage = $objetMessage;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getStatut(): ?statut
    {
        return $this->statut;
    }

    public function setStatut(?statut $statut): static
    {
        $this->statut = $statut;

        return $this;
    }
}
