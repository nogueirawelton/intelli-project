<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name', 'Nome'),
            EmailField::new('email', 'E-mail'),
            DateTimeField::new('created_at', 'Criando em')->setFormat('dd/MM/yyyy HH:mm:ss')->hideOnForm()
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', '%entity_label_plural%')
            ->setEntityLabelInSingular('Usuário')
            ->setEntityLabelInPlural('Usuários')
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function(Action $action) {
                return $action->setIcon('fa fa-user-plus')->setLabel('Adicionar usuário');
            })
            ->update(Crud::PAGE_INDEX, Action::EDIT, function(Action $action) {
                return $action->setLabel('Editar');
            })
            ->update(Crud::PAGE_INDEX, Action::DELETE, function(Action $action) {
                return $action->setLabel('Deletar');
            })
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, function(Action $action) {
                return $action->setLabel('Salvar e continuar editando');
            })
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_RETURN, function(Action $action) {
                return $action->setLabel('Salvar');
            })
        ;
    }
}
