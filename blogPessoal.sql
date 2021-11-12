CREATE DATABASE db_blogpessoal;
use db_blogpessoal;

-- Tabela TEMA
CREATE TABLE `Temas` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`descricao` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
-- Tabela Postagem
CREATE TABLE `Postagens` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(255) NOT NULL,
	`texto` varchar(1000) NOT NULL,
	`data` TIMESTAMP NOT NULL,
	`temas_id` bigint NOT NULL,
	`usuarios_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);
-- Tabela Usuarios
CREATE TABLE `Usuarios` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`usuario` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);
-- Alteração de dados
ALTER TABLE `Postagens` ADD CONSTRAINT `Postagens_fk0` FOREIGN KEY (`temas_id`) REFERENCES `Temas`(`id`);

ALTER TABLE `Postagens` ADD CONSTRAINT `Postagens_fk1` FOREIGN KEY (`usuarios_id`) REFERENCES `Usuarios`(`id`);

-- Selects
SELECT * FROM tb_postagens;
SELECT * FROM tb_temas;
SELECT * FROM tb_usuarios;

