-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db_01
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ev_users`
--

DROP TABLE IF EXISTS `ev_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_pic` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_users`
--

LOCK TABLES `ev_users` WRITE;
/*!40000 ALTER TABLE `ev_users` DISABLE KEYS */;
INSERT INTO `ev_users` VALUES (1,'admin','000000',NULL,NULL,NULL),(2,'root','$2a$10$2FOXo2myAMt68hPIMBMzeOBxPCsoy1YbHJxG6baXeVR7TNQc9aw7a','adf','fdf@qq.com','data:image/png;base64,VE9PTUFOWVNFQ1JFVFM='),(7,'nihao','$2a$10$SLEhCRhy/g3Wx3eeuRmcwu7m0ZlDHAJ5OQIjeewFirs5OPAm26gMG',NULL,NULL,NULL),(11,'asdfasdfasdfadsfadsfasfafasfasfasdfasdfasdfasdffdsafasdfasdfasdf','$2a$10$41HavIH1dZ0UNtkrpxMBBuCPazCvvrtB01DqUeGeJ6Of6kqUbLp2K',NULL,NULL,NULL),(13,'','$2a$10$ETbyN5GReFP69aax2nG4YuF2Qx3ZFiiSh7werb10fZMsWuhVcb71K',NULL,NULL,NULL),(15,'asfdasdfasdfsadf','$2a$10$VYuZCjvcTo9NMTLq.XzyU..jZHyuNd9nnUhUB9QL3zq5lsxDKZMzG',NULL,NULL,NULL),(16,'asdf','$2a$10$KCGomH0T3h.axwrTQb2npuUR1czbNw8Qn09cD9lGDq7ogp..cSiRO',NULL,NULL,NULL);
/*!40000 ALTER TABLE `ev_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-11  0:14:06
