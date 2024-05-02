<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240502122847 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE client ADD statut_id INT NOT NULL');
        $this->addSql('ALTER TABLE client ADD CONSTRAINT FK_C7440455F6203804 FOREIGN KEY (statut_id) REFERENCES statut (id)');
        $this->addSql('CREATE INDEX IDX_C7440455F6203804 ON client (statut_id)');
        $this->addSql('ALTER TABLE contact ADD statut_id INT NOT NULL');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638F6203804 FOREIGN KEY (statut_id) REFERENCES statut (id)');
        $this->addSql('CREATE INDEX IDX_4C62E638F6203804 ON contact (statut_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638F6203804');
        $this->addSql('DROP INDEX IDX_4C62E638F6203804 ON contact');
        $this->addSql('ALTER TABLE contact DROP statut_id');
        $this->addSql('ALTER TABLE client DROP FOREIGN KEY FK_C7440455F6203804');
        $this->addSql('DROP INDEX IDX_C7440455F6203804 ON client');
        $this->addSql('ALTER TABLE client DROP statut_id');
    }
}
