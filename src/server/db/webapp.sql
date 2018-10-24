-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: webapp
-- ------------------------------------------------------
-- Server version	5.7.23

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
  `company_info` int(11) DEFAULT NULL,
  `date_submitted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_company_info_idx` (`company_info`),
  KEY `fk_user_idx` (`userid`),
  KEY `fk_user_app` (`userid`),
  KEY `application_user_idx` (`userid`),
  CONSTRAINT `fk_company_info` FOREIGN KEY (`company_info`) REFERENCES `employer_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_app` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (6,1,3,'2018-08-16 08:16:40'),(7,3,4,'2018-10-03 08:16:40'),(8,4,5,'2018-09-30 08:16:40'),(9,1,3,'2018-09-01 08:16:40'),(10,1,4,'2018-08-11 08:16:40'),(11,4,5,'2018-09-18 08:16:40'),(12,1,6,'2018-10-18 08:18:23'),(49,5,19,'2018-10-09 20:26:10'),(50,5,21,'2018-10-04 20:26:10'),(51,5,16,'2018-09-04 20:26:10'),(52,6,17,'2018-08-09 20:26:10'),(53,6,20,'2018-08-20 20:26:10'),(54,6,24,'2018-08-17 20:26:10'),(55,7,19,'2018-09-03 20:26:10'),(56,7,25,'2018-09-15 20:26:10'),(57,7,17,'2018-10-05 20:26:10'),(58,8,20,'2018-09-05 20:26:10'),(59,8,22,'2018-09-22 20:26:10'),(60,8,18,'2018-10-12 20:26:10'),(61,9,21,'2018-08-26 20:26:10'),(62,9,23,'2018-10-16 20:26:10'),(63,9,25,'2018-10-13 20:26:10'),(64,10,17,'2018-08-23 20:26:10'),(65,10,16,'2018-09-21 20:26:10'),(66,10,19,'2018-09-13 20:26:10'),(67,11,24,'2018-08-03 20:26:10'),(68,11,21,'2018-10-10 20:26:10'),(69,11,23,'2018-09-17 20:26:10'),(70,12,18,'2018-08-30 20:26:10'),(71,12,17,'2018-09-11 20:26:10'),(72,12,24,'2018-09-16 20:26:10'),(73,13,25,'2018-09-09 20:26:10'),(74,13,16,'2018-09-12 20:26:10'),(75,13,19,'2018-10-22 20:26:10'),(76,14,20,'2018-08-15 20:26:10'),(77,14,17,'2018-10-23 20:26:10'),(78,14,18,'2018-08-08 20:26:10'),(79,15,21,'2018-08-06 20:26:10'),(80,15,23,'2018-09-29 20:26:10'),(81,15,25,'2018-08-24 20:26:10'),(82,16,18,'2018-10-20 20:26:10'),(83,16,17,'2018-09-27 20:26:10'),(84,16,19,'2018-08-31 20:26:10'),(85,1,NULL,'2018-09-23 12:44:00'),(86,1,28,'2018-09-25 12:47:00');
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
  `heroku_link` text NOT NULL,
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
INSERT INTO `blogs` VALUES (1,1,'https://testing-boiler.herokuapp.com/api/blogs','2018-08-06 18:53:48'),(2,3,'https://testing-boiler.herokuapp.com/api/blogs','2018-08-20 18:53:48'),(3,4,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-15 18:53:48'),(4,5,'https://testing-boiler.herokuapp.com/api/blogs','2018-08-30 19:54:58'),(5,6,'https://testing-boiler.herokuapp.com/api/blogs','2018-08-31 19:54:58'),(6,7,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-05 19:54:58'),(7,8,'https://testing-boiler.herokuapp.com/api/blogs','2018-10-15 19:54:58'),(8,9,'https://testing-boiler.herokuapp.com/api/blogs','2018-10-17 19:54:58'),(9,10,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-22 19:54:58'),(14,11,'https://testing-boiler.herokuapp.com/api/blogs','2018-10-10 19:56:18'),(15,12,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-02 19:56:18'),(16,13,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-28 19:56:18'),(17,14,'https://testing-boiler.herokuapp.com/api/blogs','2018-08-08 19:56:18'),(18,15,'https://testing-boiler.herokuapp.com/api/blogs','2018-09-19 19:56:18');
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career_services`
--

LOCK TABLES `career_services` WRITE;
/*!40000 ALTER TABLE `career_services` DISABLE KEYS */;
INSERT INTO `career_services` VALUES (1,1,1,'2018-09-09 10:34:07'),(2,3,2,'2018-08-10 10:34:07'),(3,4,3,'2018-09-18 10:34:07'),(4,1,4,'2018-09-29 10:34:07'),(5,3,4,'2018-08-17 10:34:07'),(6,4,4,'2018-09-06 10:34:07'),(7,1,4,'2018-08-26 08:06:54'),(8,5,6,'2018-10-03 20:37:25'),(9,5,3,'2018-10-02 20:37:25'),(10,6,4,'2018-08-23 20:37:25'),(11,6,1,'2018-09-05 20:37:25'),(12,6,3,'2018-09-05 20:37:25'),(13,7,7,'2018-08-08 20:37:25'),(14,7,3,'2018-09-11 20:37:25'),(15,7,1,'2018-09-22 20:37:25'),(16,8,2,'2018-08-29 20:37:25'),(17,8,3,'2018-10-20 20:37:25'),(18,8,4,'2018-10-17 20:37:25'),(19,9,4,'2018-09-24 20:37:25'),(20,9,7,'2018-08-13 20:37:25'),(21,9,5,'2018-10-12 20:37:25'),(22,10,6,'2018-08-18 20:37:25'),(23,10,4,'2018-10-13 20:37:25'),(24,10,3,'2018-09-20 20:37:25'),(25,11,1,'2018-09-30 20:37:25'),(26,11,4,'2018-08-03 20:37:25'),(27,11,6,'2018-09-01 20:37:25'),(28,12,3,'2018-08-05 20:37:25'),(29,12,2,'2018-10-14 20:37:25'),(30,13,4,'2018-10-11 20:37:25'),(31,14,5,'2018-10-22 20:37:25'),(32,14,4,'2018-09-15 20:37:25'),(33,15,1,'2018-09-04 20:37:25'),(34,16,4,'2018-09-25 20:37:25'),(35,16,3,'2018-08-02 20:37:25'),(36,1,4,'2018-10-08 12:49:00');
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
INSERT INTO `commits` VALUES (1,5,3,'asdfads','2018-08-03 17:31:58'),(2,3,2,'sdfgsdffh','2018-10-08 17:33:20'),(3,5,1,'jtyjrw5','2018-08-27 17:33:20'),(4,12,4,'3jq3kh5','2018-09-29 20:34:47'),(5,15,5,'hf4uih','2018-09-15 20:34:47'),(6,32,6,'h4thqho','2018-09-12 20:34:47'),(7,4,7,'adsfa83','2018-08-10 20:34:47'),(8,21,8,'afneiu3','2018-09-16 20:34:47'),(9,43,9,'jae894y','2018-09-13 20:34:47'),(10,12,10,'nfhan84','2018-10-23 20:34:47'),(11,9,11,'arh78r2','2018-08-12 20:34:47'),(12,15,12,'ufjn89a4','2018-10-01 20:34:47'),(13,18,13,'jrn48a9yt','2018-09-18 20:34:47');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employer_info`
--

LOCK TABLES `employer_info` WRITE;
/*!40000 ALTER TABLE `employer_info` DISABLE KEYS */;
INSERT INTO `employer_info` VALUES (3,'John Doe','Test Company','123-456-7890','123 Test Street',NULL,'Birmingham','AL','12345','2018-08-22 08:15:10'),(4,'Jane Doe','Another Company','987-654-3210','123 Another Street',NULL,'Nashville','TN','56789','2018-08-18 08:15:10'),(5,'Joe Blow','Company 3','555-555-5555','555 Test Data Dr',NULL,'San Diego','CA','92145','2018-09-19 08:15:10'),(6,'Test Person','Company 4','111-111-1111','111 Another Street',NULL,'Birmingham','AL','12345','2018-10-04 08:18:05'),(16,'Sasha Schneider','Siemens AG','342-710-2078','7667 Bedford Road',NULL,'Palatine','IL','60067','2018-09-22 20:11:13'),(17,'Bo Henderson','AT&T','414-302-9785','852 Joy Ridge Ave.',NULL,'Mcminnville','TN','37110','2018-09-28 20:11:13'),(18,'Lexi Lamb','Cartier SA','668-640-3655','9341 North White Avenue',NULL,'Covington','GA','30014','2018-08-14 20:11:13'),(19,'Beau Mahoney','Avon','897-964-6555','26 Mill Pond Dr.',NULL,'Kenosha','WI','53140','2018-10-22 20:11:13'),(20,'Alexzander Mckee','Hewlett-Packard','416-272-3324','763 Clark St',NULL,'Lacey','WA','98503','2018-09-17 20:11:13'),(21,'Allyson Summers','Volkswagen Group','851-255-4732','874 Monroe St',NULL,'Cookeville','TN','38501','2018-09-23 20:11:13'),(22,'Asa Young','SAP','546-725-5118','1 SW Jones Rd',NULL,'Zionsville','IN','46077','2018-10-03 20:11:13'),(23,'Lila Robertson','Bank of America','674-637-6310','819 Cedar Swamp Rd',NULL,'Drexel Hill','PA','19026','2018-09-25 20:11:13'),(24,'Zack Sims','Johnson & Johnson','920-832-9274','651 N. Pumpkin Hill Street',NULL,'Barberton','OH','44203','2018-08-17 20:11:13'),(25,'Keshawn Hughes','Morgan Stanley','307-448-3663','9704 Pheasant Drive',NULL,'Clearwater','FL','33756','2018-10-18 20:11:13'),(26,'James','Cool Company','555-555-5555','123 Cool Company Street','','Birmingham','st','35123','2018-08-16 12:16:09'),(27,'New Contact','New Company','111-111-1111','111 New Company Street','','Birmingham,'st','11111','2018-10-23 12:18:34'),(28,'Tamara','Tamara\'s Playhouse','555-555-5555','123 Tamaras Playhouse Dr','','Odenville','st','35120','2018-09-15 12:48:49');
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
INSERT INTO `github` VALUES (1,1,'mstringer88','2018-10-07 19:20:49'),(2,3,'ROFLHogIII','2018-09-12 19:20:49'),(3,4,'lbarret4','2018-08-23 19:20:49'),(4,5,'mstringer88','2018-09-15 20:32:59'),(5,6,'ROFLHogIII','2018-09-24 20:32:59'),(6,7,'lbarret4','2018-08-22 20:32:59'),(7,8,'mstringer88','2018-08-12 20:32:59'),(8,9,'ROFLHogIII','2018-10-09 20:32:59'),(9,10,'lbarret4','2018-08-16 20:32:59'),(10,11,'mstringer88','2018-09-28 20:32:59'),(11,12,'ROFLHogIII','2018-10-21 20:32:59'),(12,13,'lbarret4','2018-09-18 20:32:59'),(13,14,'mstringer88','2018-09-21 20:32:59'),(14,15,'ROFLHogIII','2018-08-27 20:32:59'),(15,16,'lbarret4','2018-09-16 20:32:59');
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
  `int_attachments` varchar(45) DEFAULT NULL,
  `challenge_rcvd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `challenge_due` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userid_idx` (`userid`),
  KEY `fk_emp_id_idx` (`employer_id`),
  CONSTRAINT `fk_emp_id` FOREIGN KEY (`employer_id`) REFERENCES `employer_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (2,1,'2018-09-16 00:00:00',16,'TEST CONTENT','2018-09-16 19:51:29','2018-09-23 00:00:00','2018-09-16 19:08:41'),(3,1,'2018-10-03 00:00:00',17,'TEST CONTENT','2018-10-04 19:51:29','2018-10-11 00:00:00','2018-10-03 19:11:35'),(4,1,'2018-09-14 00:00:00',18,'TEST CONTENT','2018-09-14 19:51:29','2018-09-21 00:00:00','2018-09-14 19:11:35'),(5,3,'2018-08-12 00:00:00',19,'TEST CONTENT','2018-08-12 19:51:29','2018-08-19 00:00:00','2018-08-12 19:08:41'),(6,3,'2018-10-04 00:00:00',20,'TEST CONTENT','2018-10-04 19:51:29','2018-10-11 00:00:00','2018-10-04 19:11:35'),(7,3,'2018-10-07 00:00:00',21,'TEST CONTENT','2018-10-07 19:51:29','2018-10-14 00:00:00','2018-10-07 19:11:35'),(8,4,'2018-09-15 16:00:00',22,'TEST CONTENT','2018-09-05 19:51:29','2018-09-12 00:00:00','2018-09-15 19:08:41'),(9,4,'2018-10-15 14:00:00',23,'TEST CONTENT','2018-10-15 19:51:29','2018-10-22 00:00:00','2018-10-15 19:11:35'),(10,4,'2018-10-17 13:00:00',24,'TEST CONTENT','2018-10-17 19:51:29','2018-10-24 00:00:00','2018-10-17 19:11:35'),(11,1,'2018-10-22 12:14:00',26,NULL,'2018-10-22 12:14:00','2018-10-29 00:00:00','2018-10-22 12:14:58'),(12,1,'2018-09-11 12:16:00',27,NULL,'2018-09-11 12:16:00','2018-09-18 00:00:00','2018-09-11 12:17:55');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_activities`
--

LOCK TABLES `job_activities` WRITE;
/*!40000 ALTER TABLE `job_activities` DISABLE KEYS */;
INSERT INTO `job_activities` VALUES (1,'Test Activity 1','2018-10-09 21:03:40'),(2,'Test Activity 2','2018-09-19 21:03:40'),(3,'Test Acitivity 3','2018-08-08 21:03:40'),(4,'Test Acitivity 4','2018-09-13 21:03:40'),(5,'Test Acitivity 5','2018-09-21 21:03:40'),(6,'Test Acitivity 6','2018-08-21 21:03:40'),(7,'Test Acitivity 7','2018-10-06 21:03:40'),(8,'Test Acitivity 8','2018-08-17 21:03:40'),(9,'Test Acitivity 9','2018-10-23 21:03:40'),(10,'Test Acitivity 10','2018-10-04 21:03:40'),(11,'Test Acitivity 11','2018-09-19 21:03:40'),(12,'Test Acitivity 12','2018-08-10 21:03:40'),(13,'Test Acitivity 13','2018-08-16 21:03:40'),(14,'Test Acitivity 14','2018-10-02 21:03:40'),(15,'Test Acitivity 15','2018-09-19 21:03:40'),(16,'Adding a new test activity','2018-10-23 12:49:41');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `networking`
--

LOCK TABLES `networking` WRITE;
/*!40000 ALTER TABLE `networking` DISABLE KEYS */;
INSERT INTO `networking` VALUES (1,1,'2018-10-15 09:45:00','Jim Jones','Company A',NULL,'Meetup','2018-09-29 08:56:31'),(2,3,'2018-10-15 09:45:00','Diane Black','Company B',NULL,'Meetup','2018-10-18 08:56:31'),(3,4,'2018-10-15 09:45:00','Bob Smith','Company C',NULL,'Meetup','2018-08-10 08:56:31'),(4,1,'2018-10-16 09:00:00','Amari Craig','Adobe Systems',NULL,'Meetup','2018-09-14 21:19:29'),(5,1,'2018-10-19 11:00:00','Keagan Mcneil','Kleenex',NULL,'Meetup','2018-08-17 21:19:29'),(6,3,'2018-10-16 09:00:00','Camryn Wilkins','Pampers',NULL,'Meetup','2018-10-05 21:19:29'),(7,3,'2018-10-19 11:00:00','Dustin Blackburn','Gap Inc',NULL,'Meetup','2018-10-12 21:19:29'),(8,4,'2018-10-16 09:00:00','Cesar Wiley','Porsche',NULL,'Meetup','2018-09-16 21:19:29'),(9,4,'2018-10-19 11:00:00','Konnor Case','VISA',NULL,'Meetup','2018-08-31 21:19:29'),(10,5,'2018-10-15 09:45:00','Jared Colon','Nescafe',NULL,'Meetup','2018-10-07 21:19:29'),(11,5,'2018-10-16 09:00:00','Zayne Fisher','BlackBerry',NULL,'Meetup','2018-08-01 21:19:29'),(12,6,'2018-10-16 09:00:00','Beckett Hines','Coca-Cola',NULL,'Meetup','2018-10-08 21:19:29'),(13,6,'2018-10-19 11:00:00','Laylah Nolan','Nike, Inc',NULL,'Meetup','2018-09-10 21:19:29'),(14,7,'2018-10-15 09:45:00','Jovanny Robertson','Amazon.com',NULL,'Meetup','2018-10-14 21:19:29'),(15,7,'2018-10-16 09:00:00','Charlize Barrett','Canon',NULL,'Meetup','2018-08-15 21:19:29'),(16,8,'2018-10-15 09:45:00','Macey Smith','Smirnoff',NULL,'Meetup','2018-08-31 21:19:29'),(17,8,'2018-10-16 09:00:00','Addyson Strong','Wal-Mart',NULL,'Meetup','2018-10-18 21:19:29'),(18,9,'2018-10-15 09:45:00','Jamie Fletcher','Facebook, Inc',NULL,'Meetup','2018-08-27 21:19:29'),(19,9,'2018-10-16 09:00:00','Bobby Harmon','Hyundai',NULL,'Meetup','2018-09-16 21:19:29'),(20,10,'2018-10-16 09:00:00','Eddie Sheppard','Louis Vuitton',NULL,'Meetup','2018-10-08 21:19:29'),(21,10,'2018-10-19 11:00:00','Ryland Whitaker','Mercedes-Benz',NULL,'Meetup','2018-10-23 21:19:29'),(22,11,'2018-10-15 09:45:00','Litzy Lam','KFC',NULL,'Meetup','2018-10-15 21:19:29'),(23,11,'2018-10-19 11:00:00','Kailee Maxwell','Starbucks',NULL,'Meetup','2018-10-03 21:19:29'),(24,12,'2018-10-15 09:45:00','Yael Walls','American Express',NULL,'Meetup','2018-08-02 21:19:29'),(25,12,'2018-10-16 09:00:00','Walter Daugherty','Morgan Stanley',NULL,'Meetup','2018-09-19 21:19:29'),(26,13,'2018-10-19 11:00:00','Yasmine Adams','Siemens AG',NULL,'Meetup','2018-09-21 21:19:29'),(27,14,'2018-10-15 09:45:00','Zariah Mckinney','Credit Suisse',NULL,'Meetup','2018-10-19 21:19:29'),(28,14,'2018-10-16 09:00:00','Selina Hurley','General Electric',NULL,'Meetup','2018-08-15 21:19:29'),(29,15,'2018-10-16 09:00:00','Alicia Lloyd','Deere & Company',NULL,'Meetup','2018-09-03 21:19:29'),(30,15,'2018-10-19 11:00:00','Enrique Blevins','Mitsubishi',NULL,'Meetup','2018-08-24 21:19:29'),(31,16,'2018-10-15 09:45:00','Rayna Mcmahon','Honda Motor Company, Ltd',NULL,'Meetup','2018-09-30 21:19:29'),(32,16,'2018-10-19 11:00:00','Nevaeh Duran','MasterCard',NULL,'Meetup','2018-10-24 21:19:29'),(33,1,'2018-10-23 00:00:00','John','Some New Company',NULL,'Coding Meetup','2018-10-23 12:11:40');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,1,NULL,'2018-11-16 15:29:48','2018-10-17 15:29:47'),(2,1,NULL,'2018-11-16 15:30:22','2018-10-17 15:30:22'),(3,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjMsInVuaXF1ZSI6IjFmMmEyNGQyMGI5YTgyNzY4MzZkMmQ3MzA2ZDU3YmVkNTIzNmY3ZTQ4OGU1MWY3MTVmNTZlMGE3YTM3MmRiNjYiLCJpYXQiOjE1Mzk4MDQ2OTB9.xmKNToD1ots7mDLv0-mUqLEOJb6UDCAqTsCQc1Ake8c','2018-11-16 15:31:30','2018-10-17 15:31:30'),(4,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjQsInVuaXF1ZSI6ImM2Y2RjY2IyZmIyNDU2NzgzNGI3MjlkYjQ1NzRhNmQ0ZGI5YmFjNmY2ODg1MjUxNzlhYjc2NTc0MzAwOTgyODgiLCJpYXQiOjE1NDAyNDM3MjJ9.YlFZwxDLv_3OKhgMJY940vW6M8Ney9vyZVr4zXCBFaw','2018-11-21 16:28:42','2018-10-22 16:28:42'),(5,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjUsInVuaXF1ZSI6ImM5ODNhNDg3OGQ5YmZmNTI1ZWY5YWI2ZmYzNmEwNzkzOGZlM2MyZmM2YWYyY2I3NjllZGJkNDExOWNmMmM0OTciLCJpYXQiOjE1NDAyNDM4NjN9.IWw7fE5LCm8Iq5I8dktPXO3l3_kTn0ADOdEGMBbUT50','2018-11-22 12:50:04','2018-10-22 16:31:03'),(6,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjYsInVuaXF1ZSI6IjhlNGQ1N2E5NTE2ZGZhMTdjNGUwNTZiZjQzNmRjZTNmYTNmM2E1YjQ0YjA3MzAwOTY2Y2RjNjllMzczMDVhMWIiLCJpYXQiOjE1NDAyNDM5MDl9.oEiQhGpG1tqLeWh8L9TRpQ6XUTgF1Z22bC7n01Uryes','2018-11-21 16:31:50','2018-10-22 16:31:49'),(7,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjcsInVuaXF1ZSI6Ijc5MGFiMDNkOTJjYmFmMzI3MmU1YzI1YWRmYTYzYTIyOTI1ZGM2MzQzNjMwYWFmNzQ0NjEwNDBlZGFiMDRjNjgiLCJpYXQiOjE1NDAzMTcwMjl9.Q5Pr-KpJAIWhTS1HRUt-z-D8J16Z9ns2UNyshMT65zk','2018-11-22 12:50:30','2018-10-23 12:50:29'),(8,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImFjY2Vzc3Rva2VuaWQiOjgsInVuaXF1ZSI6ImVmMjdkOGM5NjExOGYxNmE1ZDhhZTQ3M2UyMGI0ZWY2YTU2YWM1YzkwN2Y4YjEzNWRjMjgzOGQ5NzIzMThiZDkiLCJpYXQiOjE1NDAzOTI3Mzh9.0e7d3b5LvdUW1dHs5Hxt2BRuC7C-2WJDOvuPfo1apv4','2018-11-23 09:52:29','2018-10-24 09:52:18');
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
INSERT INTO `user_activities` VALUES (3,1),(7,1),(10,1),(13,1),(16,1),(3,2),(5,2),(7,2),(11,2),(14,2),(7,3),(10,3),(13,3),(4,4),(6,4),(7,4),(11,4),(14,4),(16,4),(1,5),(3,5),(7,5),(10,5),(13,5),(3,6),(5,6),(8,6),(12,6),(15,6),(1,7),(4,7),(5,7),(8,7),(10,7),(13,7),(16,7),(1,8),(3,8),(5,8),(6,8),(8,8),(12,8),(15,8),(1,9),(4,9),(8,9),(10,9),(13,9),(5,10),(6,10),(8,10),(12,10),(15,10),(16,10),(6,11),(9,11),(11,11),(14,11),(9,12),(12,12),(15,12),(1,13),(6,13),(9,13),(11,13),(14,13),(16,13),(4,14),(9,14),(12,14),(15,14),(4,15),(9,15),(11,15),(14,15),(1,16);
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
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) DEFAULT 'guest',
  `img` text,
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
INSERT INTO `users` VALUES (1,'Michael','Stringer','michael@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest','https://i.imgur.com/NFtwwuU.png',3,'1988-02-08','Birmingham','AL','2018-10-08 13:49:21'),(3,'Richard','Garner','richard@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,3,'1998-02-13','Montgomery','AL','2018-10-08 18:50:14'),(4,'Llewellyn','Barrett','llewellyn@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,3,'1986-06-15','Raleigh','NC','2018-10-08 18:50:14'),(5,'Joel','Diaz','joel@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,1,'1983-06-16','Santa Ana','CA','2018-10-16 19:50:09'),(6,'Eden','Black','eden@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,1,'1982-03-03','Baton Rouge','LA','2018-10-16 19:50:09'),(7,'Tristen','Cobb','tristen@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,1,'1986-11-20','Pittsburgh','PA','2018-10-16 19:50:09'),(8,'Annie','Mclean','annie@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,2,'1989-07-31','Los Angeles','CA','2018-10-16 19:50:09'),(9,'Orlando','Valentine','orlando@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,2,'1998-05-09','Lexington','KY','2018-10-16 19:50:09'),(10,'Cale','Rhodes','cale@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,2,'1997-01-21','Arlington','TX','2018-10-16 19:50:09'),(11,'Andrea','Sweeney','andrea@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,3,'1985-08-05','Durham','NC','2018-10-16 19:50:09'),(12,'Gemma','Deleon','gemma@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,1,'1997-02-04','Corpus Christi','TX','2018-10-16 19:50:09'),(13,'Nyla','Colon','nyla@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,3,'1997-08-01','Dallas','TX','2018-10-16 19:50:09'),(14,'Elianna','Livingston','elianna@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,1,'1988-02-27','Reno','NV','2018-10-16 19:50:09'),(15,'Felix','Zamora','felix@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,2,'1984-10-26','San Jose','CA','2018-10-16 19:50:09'),(16,'Rene','Owen','rene@test.com','$2b$10$W.WMFi6TwnIWrv01nGWcduj1PJZA7UTk6SLDvVyGiG2UTJovbZtQC','guest',NULL,2,'1976-03-06','Omaha','NE','2018-10-16 19:50:09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'webapp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-24 10:44:43
