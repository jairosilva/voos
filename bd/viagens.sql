-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.18 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para belvitur
CREATE DATABASE IF NOT EXISTS `belvitur` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `belvitur`;

-- Copiando estrutura para tabela belvitur.aeroportos
CREATE TABLE IF NOT EXISTS `aeroportos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sigla` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `uf` char(2) DEFAULT NULL,
  `aeroporto_mais_proximo` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `menor_distancia` float(15,2) DEFAULT NULL,
  `aeroporto_mais_distante` char(3) DEFAULT NULL,
  `maior_distancia` float(15,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela belvitur.aeroportos: 124 rows
/*!40000 ALTER TABLE `aeroportos` DISABLE KEYS */;
/*!40000 ALTER TABLE `aeroportos` ENABLE KEYS */;

-- Copiando estrutura para tabela belvitur.processamentos
CREATE TABLE IF NOT EXISTS `processamentos` (
  `data` date NOT NULL,
  `origem` char(3) NOT NULL DEFAULT '',
  `destino` char(3) NOT NULL DEFAULT '',
  PRIMARY KEY (`data`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela belvitur.processamentos: 0 rows
/*!40000 ALTER TABLE `processamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `processamentos` ENABLE KEYS */;

-- Copiando estrutura para tabela belvitur.voos
CREATE TABLE IF NOT EXISTS `voos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` text,
  `origem` char(3) DEFAULT NULL,
  `destino` char(3) DEFAULT NULL,
  `data_saida` date DEFAULT NULL,
  `distancia` float(15,2) DEFAULT NULL,
  `menor_preco` float(15,2) DEFAULT NULL,
  `aeronave` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `duracao` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `voos_01` (`origem`,`destino`,`data_saida`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela belvitur.voos: 39 rows
/*!40000 ALTER TABLE `voos` DISABLE KEYS */;
/*!40000 ALTER TABLE `voos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
