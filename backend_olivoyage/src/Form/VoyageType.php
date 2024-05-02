<?php

namespace App\Form;

use App\Entity\Categorie;
use App\Entity\user;
use App\Entity\Voyage;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VoyageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateDepart', null, [
                'widget' => 'single_text',
            ])
            ->add('dateFin', null, [
                'widget' => 'single_text',
            ])
            ->add('nom')
            ->add('pays')
            ->add('prix')
            ->add('nombreVoyageurs')
            ->add('image')
            ->add('categorie', EntityType::class, [
                'class' => Categorie::class,
                'choice_label' => 'id',
                'multiple' => true,
            ])
            ->add('user', EntityType::class, [
                'class' => user::class,
                'choice_label' => 'id',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Voyage::class,
        ]);
    }
}
