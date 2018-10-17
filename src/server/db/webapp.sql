-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: webapp
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `company_info` int(11) NOT NULL,
  `date_submitted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_company_info_idx` (`company_info`),
  KEY `fk_user_idx` (`userid`),
  KEY `fk_user_app` (`userid`),
  KEY `application_user_idx` (`userid`),
  CONSTRAINT `fk_company_info` FOREIGN KEY (`company_info`) REFERENCES `employer_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_app` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (6,1,3,'2018-10-16 08:16:40'),(7,3,4,'2018-10-16 08:16:40'),(8,4,5,'2018-10-16 08:16:40'),(9,1,3,'2018-10-16 08:16:40'),(10,1,4,'2018-10-16 08:16:40'),(11,4,5,'2018-10-16 08:16:40'),(12,1,6,'2018-10-16 08:18:23'),(49,5,19,'2018-10-16 20:26:10'),(50,5,21,'2018-10-16 20:26:10'),(51,5,16,'2018-10-16 20:26:10'),(52,6,17,'2018-10-16 20:26:10'),(53,6,20,'2018-10-16 20:26:10'),(54,6,24,'2018-10-16 20:26:10'),(55,7,19,'2018-10-16 20:26:10'),(56,7,25,'2018-10-16 20:26:10'),(57,7,17,'2018-10-16 20:26:10'),(58,8,20,'2018-10-16 20:26:10'),(59,8,22,'2018-10-16 20:26:10'),(60,8,18,'2018-10-16 20:26:10'),(61,9,21,'2018-10-16 20:26:10'),(62,9,23,'2018-10-16 20:26:10'),(63,9,25,'2018-10-16 20:26:10'),(64,10,17,'2018-10-16 20:26:10'),(65,10,16,'2018-10-16 20:26:10'),(66,10,19,'2018-10-16 20:26:10'),(67,11,24,'2018-10-16 20:26:10'),(68,11,21,'2018-10-16 20:26:10'),(69,11,23,'2018-10-16 20:26:10'),(70,12,18,'2018-10-16 20:26:10'),(71,12,17,'2018-10-16 20:26:10'),(72,12,24,'2018-10-16 20:26:10'),(73,13,25,'2018-10-16 20:26:10'),(74,13,16,'2018-10-16 20:26:10'),(75,13,19,'2018-10-16 20:26:10'),(76,14,20,'2018-10-16 20:26:10'),(77,14,17,'2018-10-16 20:26:10'),(78,14,18,'2018-10-16 20:26:10'),(79,15,21,'2018-10-16 20:26:10'),(80,15,23,'2018-10-16 20:26:10'),(81,15,25,'2018-10-16 20:26:10'),(82,16,18,'2018-10-16 20:26:10'),(83,16,17,'2018-10-16 20:26:10'),(84,16,19,'2018-10-16 20:26:10');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `heroku_link` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `blogid` (`userid`),
  CONSTRAINT `blogid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,1,'heroku-link.com','2018-10-08 18:53:48'),(2,3,'heroku-link.com','2018-10-08 18:53:48'),(3,4,'heroku-link.com','2018-10-08 18:53:48'),(4,5,'heroku-link.com','2018-10-16 19:54:58'),(5,6,'heroku-link.com','2018-10-16 19:54:58'),(6,7,'heroku-link.com','2018-10-16 19:54:58'),(7,8,'heroku-link.com','2018-10-16 19:54:58'),(8,9,'heroku-link.com','2018-10-16 19:54:58'),(9,10,'heroku-link.com','2018-10-16 19:54:58'),(14,11,'heroku-link.com','2018-10-16 19:56:18'),(15,12,'heroku-link.com','2018-10-16 19:56:18'),(16,13,'heroku-link.com','2018-10-16 19:56:18'),(17,14,'heroku-link.com','2018-10-16 19:56:18'),(18,15,'heroku-link.com','2018-10-16 19:56:18');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `career_services`
--

DROP TABLE IF EXISTS `career_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `career_services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `service_type` int(11) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_services_idx` (`service_type`),
  KEY `fk_userid_idx` (`userid`),
  CONSTRAINT `fk_csUser` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_services` FOREIGN KEY (`service_type`) REFERENCES `services` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career_services`
--

LOCK TABLES `career_services` WRITE;
/*!40000 ALTER TABLE `career_services` DISABLE KEYS */;
INSERT INTO `career_services` VALUES (1,1,1,'2018-10-15 10:34:07'),(2,3,2,'2018-10-15 10:34:07'),(3,4,3,'2018-10-15 10:34:07'),(4,1,4,'2018-10-15 10:34:07'),(5,3,4,'2018-10-15 10:34:07'),(6,4,4,'2018-10-15 10:34:07'),(7,1,4,'2018-10-16 08:06:54'),(8,5,6,'2018-10-16 20:37:25'),(9,5,3,'2018-10-16 20:37:25'),(10,6,4,'2018-10-16 20:37:25'),(11,6,1,'2018-10-16 20:37:25'),(12,6,3,'2018-10-16 20:37:25'),(13,7,7,'2018-10-16 20:37:25'),(14,7,3,'2018-10-16 20:37:25'),(15,7,1,'2018-10-16 20:37:25'),(16,8,2,'2018-10-16 20:37:25'),(17,8,3,'2018-10-16 20:37:25'),(18,8,4,'2018-10-16 20:37:25'),(19,9,4,'2018-10-16 20:37:25'),(20,9,7,'2018-10-16 20:37:25'),(21,9,5,'2018-10-16 20:37:25'),(22,10,6,'2018-10-16 20:37:25'),(23,10,4,'2018-10-16 20:37:25'),(24,10,3,'2018-10-16 20:37:25'),(25,11,1,'2018-10-16 20:37:25'),(26,11,4,'2018-10-16 20:37:25'),(27,11,6,'2018-10-16 20:37:25'),(28,12,3,'2018-10-16 20:37:25'),(29,12,2,'2018-10-16 20:37:25'),(30,13,4,'2018-10-16 20:37:25'),(31,14,5,'2018-10-16 20:37:25'),(32,14,4,'2018-10-16 20:37:25'),(33,15,1,'2018-10-16 20:37:25'),(34,16,4,'2018-10-16 20:37:25'),(35,16,3,'2018-10-16 20:37:25');
/*!40000 ALTER TABLE `career_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commits`
--

DROP TABLE IF EXISTS `commits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number_commits` int(11) NOT NULL,
  `github_id` int(11) NOT NULL,
  `hash` varchar(60) DEFAULT NULL,
  `_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_github_idx` (`github_id`),
  CONSTRAINT `fk_github` FOREIGN KEY (`github_id`) REFERENCES `github` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commits`
--

LOCK TABLES `commits` WRITE;
/*!40000 ALTER TABLE `commits` DISABLE KEYS */;
INSERT INTO `commits` VALUES (1,5,3,'asdfads','2018-10-12 17:31:58'),(2,3,2,'sdfgsdffh','2018-10-12 17:33:20'),(3,5,1,'jtyjrw5','2018-10-12 17:33:20'),(4,12,4,'3jq3kh5','2018-10-16 20:34:47'),(5,15,5,'hf4uih','2018-10-16 20:34:47'),(6,32,6,'h4thqho','2018-10-16 20:34:47'),(7,4,7,'adsfa83','2018-10-16 20:34:47'),(8,21,8,'afneiu3','2018-10-16 20:34:47'),(9,43,9,'jae894y','2018-10-16 20:34:47'),(10,12,10,'nfhan84','2018-10-16 20:34:47'),(11,9,11,'arh78r2','2018-10-16 20:34:47'),(12,15,12,'ufjn89a4','2018-10-16 20:34:47'),(13,18,13,'jrn48a9yt','2018-10-16 20:34:47');
/*!40000 ALTER TABLE `commits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employer_info`
--

DROP TABLE IF EXISTS `employer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employer_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact` varchar(45) NOT NULL,
  `company_name` varchar(60) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `address` varchar(255) NOT NULL,
  `address_2` varchar(255) DEFAULT NULL,
  `city` varchar(150) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zip` varchar(5) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employer_info`
--

LOCK TABLES `employer_info` WRITE;
/*!40000 ALTER TABLE `employer_info` DISABLE KEYS */;
INSERT INTO `employer_info` VALUES (3,'John Doe','Test Company','123-456-7890','123 Test Street',NULL,'Birmingham','AL','12345','2018-10-16 08:15:10'),(4,'Jane Doe','Another Company','987-654-3210','123 Another Street',NULL,'Nashville','TN','56789','2018-10-16 08:15:10'),(5,'Joe Blow','Company 3','555-555-5555','555 Test Data Dr',NULL,'San Diego','CA','92145','2018-10-16 08:15:10'),(6,'Test Person','Company 4','111-111-1111','111 Another Street',NULL,'Birmingham','AL','12345','2018-10-16 08:18:05'),(16,'Sasha Schneider','Siemens AG','342-710-2078','7667 Bedford Road',NULL,'Palatine','IL','60067','2018-10-16 20:11:13'),(17,'Bo Henderson','AT&T','414-302-9785','852 Joy Ridge Ave.',NULL,'Mcminnville','TN','37110','2018-10-16 20:11:13'),(18,'Lexi Lamb','Cartier SA','668-640-3655','9341 North White Avenue',NULL,'Covington','GA','30014','2018-10-16 20:11:13'),(19,'Beau Mahoney','Avon','897-964-6555','26 Mill Pond Dr.',NULL,'Kenosha','WI','53140','2018-10-16 20:11:13'),(20,'Alexzander Mckee','Hewlett-Packard','416-272-3324','763 Clark St',NULL,'Lacey','WA','98503','2018-10-16 20:11:13'),(21,'Allyson Summers','Volkswagen Group','851-255-4732','874 Monroe St',NULL,'Cookeville','TN','38501','2018-10-16 20:11:13'),(22,'Asa Young','SAP','546-725-5118','1 SW Jones Rd',NULL,'Zionsville','IN','46077','2018-10-16 20:11:13'),(23,'Lila Robertson','Bank of America','674-637-6310','819 Cedar Swamp Rd',NULL,'Drexel Hill','PA','19026','2018-10-16 20:11:13'),(24,'Zack Sims','Johnson & Johnson','920-832-9274','651 N. Pumpkin Hill Street',NULL,'Barberton','OH','44203','2018-10-16 20:11:13'),(25,'Keshawn Hughes','Morgan Stanley','307-448-3663','9704 Pheasant Drive',NULL,'Clearwater','FL','33756','2018-10-16 20:11:13');
/*!40000 ALTER TABLE `employer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `github`
--

DROP TABLE IF EXISTS `github`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `github` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `github_link` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `githubid_idx` (`userid`),
  CONSTRAINT `githubid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `github`
--

LOCK TABLES `github` WRITE;
/*!40000 ALTER TABLE `github` DISABLE KEYS */;
INSERT INTO `github` VALUES (1,1,'michael@github.com','2018-10-08 19:20:49'),(2,3,'richard@github.com','2018-10-08 19:20:49'),(3,4,'llewellyn@github.com','2018-10-08 19:20:49'),(4,5,'joel@github.com','2018-10-16 20:32:59'),(5,6,'eden@github.com','2018-10-16 20:32:59'),(6,7,'tristan@github.com','2018-10-16 20:32:59'),(7,8,'annie@github.com','2018-10-16 20:32:59'),(8,9,'orlando@github.com','2018-10-16 20:32:59'),(9,10,'cale@github.com','2018-10-16 20:32:59'),(10,11,'andrea@github.com','2018-10-16 20:32:59'),(11,12,'gemma@github.com','2018-10-16 20:32:59'),(12,13,'nyla@github.com','2018-10-16 20:32:59'),(13,14,'elianna@github.com','2018-10-16 20:32:59'),(14,15,'felix@github.com','2018-10-16 20:32:59'),(15,16,'rene@github.com','2018-10-16 20:32:59');
/*!40000 ALTER TABLE `github` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `interview_date` datetime NOT NULL,
  `employer_id` int(11) DEFAULT NULL,
  `int_attachments` varchar(45) NOT NULL,
  `challenge_rcvd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `challenge_due` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userid_idx` (`userid`),
  KEY `fk_emp_id_idx` (`employer_id`),
  CONSTRAINT `fk_emp_id` FOREIGN KEY (`employer_id`) REFERENCES `employer_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (2,1,'2018-10-08 00:00:00',16,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2017-03-08 19:08:41'),(3,1,'2018-10-08 00:00:00',17,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2017-09-09 19:11:35'),(4,1,'2018-10-08 00:00:00',18,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2018-10-10 19:11:35'),(5,3,'2018-10-08 00:00:00',19,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2017-03-08 19:08:41'),(6,3,'2018-10-08 00:00:00',20,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2018-10-09 19:11:35'),(7,3,'2018-10-08 00:00:00',21,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2018-10-10 19:11:35'),(8,4,'2018-10-08 00:00:00',22,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2017-03-08 19:08:41'),(9,4,'2018-10-08 00:00:00',23,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2018-10-09 19:11:35'),(10,4,'2018-10-08 00:00:00',24,'TEST CONTENT','2018-10-11 19:51:29',NULL,'2018-10-10 19:11:35');
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_activities`
--

DROP TABLE IF EXISTS `job_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_content` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_activities`
--

LOCK TABLES `job_activities` WRITE;
/*!40000 ALTER TABLE `job_activities` DISABLE KEYS */;
INSERT INTO `job_activities` VALUES (1,'Test Activity 1','2018-10-16 21:03:40'),(2,'Test Activity 2','2018-10-16 21:03:40'),(3,'Test Acitivity 3','2018-10-16 21:03:40'),(4,'Test Acitivity 4','2018-10-16 21:03:40'),(5,'Test Acitivity 5','2018-10-16 21:03:40'),(6,'Test Acitivity 6','2018-10-16 21:03:40'),(7,'Test Acitivity 7','2018-10-16 21:03:40'),(8,'Test Acitivity 8','2018-10-16 21:03:40'),(9,'Test Acitivity 9','2018-10-16 21:03:40'),(10,'Test Acitivity 10','2018-10-16 21:03:40'),(11,'Test Acitivity 11','2018-10-16 21:03:40'),(12,'Test Acitivity 12','2018-10-16 21:03:40'),(13,'Test Acitivity 13','2018-10-16 21:03:40'),(14,'Test Acitivity 14','2018-10-16 21:03:40'),(15,'Test Acitivity 15','2018-10-16 21:03:40');
/*!40000 ALTER TABLE `job_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `networking`
--

DROP TABLE IF EXISTS `networking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `networking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `network_date` datetime DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `net_activities` longtext,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_idx` (`user`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `networking`
--

LOCK TABLES `networking` WRITE;
/*!40000 ALTER TABLE `networking` DISABLE KEYS */;
INSERT INTO `networking` VALUES (1,1,'2019-07-04 00:00:00','Jim Jones','Company A',NULL,NULL,'2018-10-16 08:56:31'),(2,3,'2019-03-24 00:00:00','Diane Black','Company B',NULL,NULL,'2018-10-16 08:56:31'),(3,4,'2019-04-22 00:00:00','Bob Smith','Company C',NULL,NULL,'2018-10-16 08:56:31'),(4,1,'2019-03-27 00:00:00','Amari Craig','Adobe Systems',NULL,NULL,'2018-10-16 21:19:29'),(5,1,'2018-10-20 00:00:00','Keagan Mcneil','Kleenex',NULL,NULL,'2018-10-16 21:19:29'),(6,3,'2019-05-18 00:00:00','Camryn Wilkins','Pampers',NULL,NULL,'2018-10-16 21:19:29'),(7,3,'2019-08-21 00:00:00','Dustin Blackburn','Gap Inc',NULL,NULL,'2018-10-16 21:19:29'),(8,4,'2019-04-12 00:00:00','Cesar Wiley','Porsche',NULL,NULL,'2018-10-16 21:19:29'),(9,4,'2019-06-30 00:00:00','Konnor Case','VISA',NULL,NULL,'2018-10-16 21:19:29'),(10,5,'2019-05-24 00:00:00','Jared Colon','Nescafe',NULL,NULL,'2018-10-16 21:19:29'),(11,5,'2018-12-10 00:00:00','Zayne Fisher','BlackBerry',NULL,NULL,'2018-10-16 21:19:29'),(12,6,'2019-08-04 00:00:00','Beckett Hines','Coca-Cola',NULL,NULL,'2018-10-16 21:19:29'),(13,6,'2019-10-05 00:00:00','Laylah Nolan','Nike, Inc',NULL,NULL,'2018-10-16 21:19:29'),(14,7,'2019-05-17 00:00:00','Jovanny Robertson','Amazon.com',NULL,NULL,'2018-10-16 21:19:29'),(15,7,'2019-06-07 00:00:00','Charlize Barrett','Canon',NULL,NULL,'2018-10-16 21:19:29'),(16,8,'2019-05-01 00:00:00','Macey Smith','Smirnoff',NULL,NULL,'2018-10-16 21:19:29'),(17,8,'2019-09-13 00:00:00','Addyson Strong','Wal-Mart',NULL,NULL,'2018-10-16 21:19:29'),(18,9,'2019-03-26 00:00:00','Jamie Fletcher','Facebook, Inc',NULL,NULL,'2018-10-16 21:19:29'),(19,9,'2019-04-03 00:00:00','Bobby Harmon','Hyundai',NULL,NULL,'2018-10-16 21:19:29'),(20,10,'2019-09-27 00:00:00','Eddie Sheppard','Louis Vuitton',NULL,NULL,'2018-10-16 21:19:29'),(21,10,'2019-01-11 00:00:00','Ryland Whitaker','Mercedes-Benz',NULL,NULL,'2018-10-16 21:19:29'),(22,11,'2019-03-26 00:00:00','Litzy Lam','KFC',NULL,NULL,'2018-10-16 21:19:29'),(23,11,'2019-04-03 00:00:00','Kailee Maxwell','Starbucks',NULL,NULL,'2018-10-16 21:19:29'),(24,12,'2019-09-27 00:00:00','Yael Walls','American Express',NULL,NULL,'2018-10-16 21:19:29'),(25,12,'2019-01-11 00:00:00','Walter Daugherty','Morgan Stanley',NULL,NULL,'2018-10-16 21:19:29'),(26,13,'2018-11-02 00:00:00','Yasmine Adams','Siemens AG',NULL,NULL,'2018-10-16 21:19:29'),(27,14,'2018-12-25 00:00:00','Zariah Mckinney','Credit Suisse',NULL,NULL,'2018-10-16 21:19:29'),(28,14,'2019-02-27 00:00:00','Selina Hurley','General Electric',NULL,NULL,'2018-10-16 21:19:29'),(29,15,'2019-03-14 00:00:00','Alicia Lloyd','Deere & Company',NULL,NULL,'2018-10-16 21:19:29'),(30,15,'2019-06-24 00:00:00','Enrique Blevins','Mitsubishi',NULL,NULL,'2018-10-16 21:19:29'),(31,16,'2019-09-19 00:00:00','Rayna Mcmahon','Honda Motor Company, Ltd',NULL,NULL,'2018-10-16 21:19:29'),(32,16,'2019-02-02 00:00:00','Nevaeh Duran','MasterCard',NULL,NULL,'2018-10-16 21:19:29');
/*!40000 ALTER TABLE `networking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `program_type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program`
--

LOCK TABLES `program` WRITE;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` VALUES (1,'atomic'),(2,'molecular'),(3,'catalyst');
/*!40000 ALTER TABLE `program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Resume Requirements'),(2,'LinkedIn Improvements'),(3,'Interview Suggestioins'),(4,'Mock Interview'),(5,'Career Coaching'),(6,'Headshot Suggestions'),(7,'Networking Tips');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `token` text,
  `expires` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userid_idx` (`userid`),
  CONSTRAINT `fk_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,1,NULL,'2018-11-16 15:29:48','2018-10-17 15:29:47'),(2,1,NULL,'2018-11-16 15:30:22','2018-10-17 15:30:22'),(3,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjMsInVuaXF1ZSI6IjFmMmEyNGQyMGI5YTgyNzY4MzZkMmQ3MzA2ZDU3YmVkNTIzNmY3ZTQ4OGU1MWY3MTVmNTZlMGE3YTM3MmRiNjYiLCJpYXQiOjE1Mzk4MDQ2OTB9.xmKNToD1ots7mDLv0-mUqLEOJb6UDCAqTsCQc1Ake8c','2018-11-16 15:31:30','2018-10-17 15:31:30');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_activities`
--

DROP TABLE IF EXISTS `user_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_activities` (
  `userid` int(11) NOT NULL,
  `activityid` int(11) NOT NULL,
  PRIMARY KEY (`userid`,`activityid`),
  KEY `fk_ua_actid_idx` (`activityid`),
  CONSTRAINT `fk_ua_actid` FOREIGN KEY (`activityid`) REFERENCES `job_activities` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ua_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_activities`
--

LOCK TABLES `user_activities` WRITE;
/*!40000 ALTER TABLE `user_activities` DISABLE KEYS */;
INSERT INTO `user_activities` VALUES (3,1),(7,1),(10,1),(13,1),(16,1),(3,2),(5,2),(7,2),(11,2),(14,2),(7,3),(10,3),(13,3),(4,4),(6,4),(7,4),(11,4),(14,4),(16,4),(1,5),(3,5),(7,5),(10,5),(13,5),(3,6),(5,6),(8,6),(12,6),(15,6),(1,7),(4,7),(5,7),(8,7),(10,7),(13,7),(16,7),(1,8),(3,8),(5,8),(6,8),(8,8),(12,8),(15,8),(1,9),(4,9),(8,9),(10,9),(13,9),(5,10),(6,10),(8,10),(12,10),(15,10),(16,10),(6,11),(9,11),(11,11),(14,11),(9,12),(12,12),(15,12),(1,13),(6,13),(9,13),(11,13),(14,13),(16,13),(4,14),(9,14),(12,14),(15,14),(4,15),(9,15),(11,15),(14,15);
/*!40000 ALTER TABLE `user_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_role` varchar(45) DEFAULT 'Guest',
  `img` blob,
  `program_id` int(11) DEFAULT NULL,
  `dob` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_program_idx` (`program_id`),
  CONSTRAINT `fk_program` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Michael','Stringer','michael@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,3,'1983-03-30','Phoenix','AR','2018-10-08 13:49:21'),(3,'Richard','Garner','richard@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,3,'1998-02-13','Montgomery','AL','2018-10-08 18:50:14'),(4,'Llewellyn','Barrett','llewellyn@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,3,'1986-06-15','Raleigh','NC','2018-10-08 18:50:14'),(5,'Joel','Diaz','joel@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1983-06-16','Santa Ana','CA','2018-10-16 19:50:09'),(6,'Eden','Black','eden@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1982-03-03','Baton Rouge','LA','2018-10-16 19:50:09'),(7,'Tristen','Cobb','tristen@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1986-11-20','Pittsburgh','PA','2018-10-16 19:50:09'),(8,'Annie','Mclean','annie@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1989-07-31','Los Angeles','CA','2018-10-16 19:50:09'),(9,'Orlando','Valentine','orlando@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1998-05-09','Lexington','KY','2018-10-16 19:50:09'),(10,'Cale','Rhodes','cale@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1997-01-21','Arlington','TX','2018-10-16 19:50:09'),(11,'Andrea','Sweeney','andrea@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1985-08-05','Durham','NC','2018-10-16 19:50:09'),(12,'Gemma','Deleon','gemma@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1997-02-04','Corpus Christi','TX','2018-10-16 19:50:09'),(13,'Nyla','Colon','nyla@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1997-08-01','Dallas','TX','2018-10-16 19:50:09'),(14,'Elianna','Livingston','elianna@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1988-02-27','Reno','NV','2018-10-16 19:50:09'),(15,'Felix','Zamora','felix@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1984-10-26','San Jose','CA','2018-10-16 19:50:09'),(16,'Rene','Owen','rene@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','Guest',NULL,NULL,'1976-03-06','Omaha','NE','2018-10-16 19:50:09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-17 15:40:57
