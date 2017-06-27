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


DROP TABLE IF EXISTS `cashacc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cashacc` (
  `usrname` varchar(32) NOT NULL,
  `car` float unsigned,
  `domestic` float unsigned,
  `education` float unsigned,
  `entertainment` float unsigned,
  `fin` float unsigned,
  `game` float unsigned,
  `international` float unsigned,
  `internet` float unsigned,
  `military` float unsigned,
  `property` float unsigned,
  `social` float unsigned,
  `sports` float unsigned,
  `tech` float unsigned,
  `women` float unsigned,
  KEY `usrname` (`usrname`),
  CONSTRAINT `cashacc_ibfk_2` FOREIGN KEY (`usrname`) REFERENCES `account` (`usrname`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;