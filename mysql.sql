DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `usrname` varchar(32) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`usrname`),
  UNIQUE KEY `email` (`email`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `likeacc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likeacc` (
  `usrname` varchar(32) NOT NULL,
  `car` float unsigned DEFAULT 10,
  `domestic` float unsigned DEFAULT 10,
  `education` float unsigned DEFAULT 10,
  `entertainment` float unsigned DEFAULT 10,
  `fin` float unsigned DEFAULT 10,
  `game` float unsigned DEFAULT 10,
  `international` float unsigned DEFAULT 10,
  `internet` float unsigned DEFAULT 10,
  `military` float unsigned DEFAULT 10,
  `property` float unsigned DEFAULT 10,
  `social` float unsigned DEFAULT 10,
  `sports` float unsigned DEFAULT 10,
  `tech` float unsigned DEFAULT 10,
  `women` float unsigned DEFAULT 10,
  KEY `usrname` (`usrname`),
  CONSTRAINT `cashacc_ibfk_2` FOREIGN KEY (`usrname`) REFERENCES `account` (`usrname`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;