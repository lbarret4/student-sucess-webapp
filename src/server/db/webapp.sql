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
-- Table structure for table `Commits`
--

DROP TABLE IF EXISTS `Commits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Commits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number_commits` int(11) NOT NULL,
  `github_id` int(11) NOT NULL,
  `check_date` datetime NOT NULL,
  `_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_github_idx` (`github_id`),
  CONSTRAINT `fk_github` FOREIGN KEY (`github_id`) REFERENCES `github` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Commits`
--

LOCK TABLES `Commits` WRITE;
/*!40000 ALTER TABLE `Commits` DISABLE KEYS */;
/*!40000 ALTER TABLE `Commits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_info` int(11) NOT NULL,
  `date_submitted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_company_info_idx` (`company_info`),
  CONSTRAINT `fk_company_info` FOREIGN KEY (`company_info`) REFERENCES `employer_info` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
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
  CONSTRAINT `blogid` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,1,'heroku-link.com','2018-10-08 18:53:48'),(2,3,'heroku-link.com','2018-10-08 18:53:48'),(3,4,'heroku-link.com','2018-10-08 18:53:48');
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
  CONSTRAINT `fk_csUser` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_services` FOREIGN KEY (`service_type`) REFERENCES `services` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career_services`
--

LOCK TABLES `career_services` WRITE;
/*!40000 ALTER TABLE `career_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `career_services` ENABLE KEYS */;
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
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employer_info`
--

LOCK TABLES `employer_info` WRITE;
/*!40000 ALTER TABLE `employer_info` DISABLE KEYS */;
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
  CONSTRAINT `githubid` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `github`
--

LOCK TABLES `github` WRITE;
/*!40000 ALTER TABLE `github` DISABLE KEYS */;
INSERT INTO `github` VALUES (1,1,'michael@github.com','2018-10-08 19:20:49'),(2,3,'richard@github.com','2018-10-08 19:20:49'),(3,4,'llewellyn@github.com','2018-10-08 19:20:49');
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
  `scheduled_int` tinyint(4) DEFAULT NULL,
  `int_attachments` varchar(45) NOT NULL,
  `challenge_rcvd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `challenge_due` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userid_idx` (`userid`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (2,1,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:08:41'),(3,1,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(4,1,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(5,3,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(6,3,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(7,3,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(8,4,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(9,4,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35'),(10,4,'2018-10-08 00:00:00',NULL,'','2018-10-11 19:51:29',NULL,'2018-10-08 19:11:35');
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
  `int_given_week` int(11) NOT NULL,
  `num_network_activities` int(11) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_activities`
--

LOCK TABLES `job_activities` WRITE;
/*!40000 ALTER TABLE `job_activities` DISABLE KEYS */;
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
  `interview_week` varchar(45) NOT NULL,
  `net_activities` int(11) NOT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `attachment` varchar(45) DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `networking`
--

LOCK TABLES `networking` WRITE;
/*!40000 ALTER TABLE `networking` DISABLE KEYS */;
/*!40000 ALTER TABLE `networking` ENABLE KEYS */;
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
  `token` varchar(60) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_userid_idx` (`userid`),
  CONSTRAINT `fk_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_role` varchar(45) DEFAULT 'Guest',
  `program_type` varchar(45) NOT NULL,
  `dob` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Michael','Stringer','michael@test.com','password123','Guest','','','','','2018-10-08 13:49:21'),(3,'Richard','Garner','richard@test.com','password123','Guest','','','','','2018-10-08 18:50:14'),(4,'Llewellyn','Barrett','llewellyn@test.com','password123','Guest','','','','','2018-10-08 18:50:14');
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

-- Dump completed on 2018-10-12 12:17:07
