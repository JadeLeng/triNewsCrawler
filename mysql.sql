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