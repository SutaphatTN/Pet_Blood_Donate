-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for scholarship_system
CREATE DATABASE IF NOT EXISTS `scholarship_system` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `scholarship_system`;

-- Dumping structure for table scholarship_system.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `AMID` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL DEFAULT '',
  `Status` varchar(100) NOT NULL DEFAULT '',
  `Username` varchar(100) NOT NULL DEFAULT '',
  `Password` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`AMID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table scholarship_system.admin: ~3 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
REPLACE INTO `admin` (`AMID`, `Name`, `Status`, `Username`, `Password`) VALUES
	(1, 'Sutaphat', 'Admin', '', ''),
	(2, 'Manasicha', 'Admin', '', ''),
	(3, 'จิรพนธ์', 'admin', '000000', '$2y$10$XTx3aVBQWiqDeRAS/jaw9.IyksSPk97yRcohlXiiPb.U4x1LjT0O2');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table scholarship_system.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `CMID` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `Comment` varchar(1000) NOT NULL DEFAULT '',
  `Name` varchar(100) NOT NULL DEFAULT '',
  `Surname` varchar(100) NOT NULL DEFAULT '',
  `Email` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`CMID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table scholarship_system.comment: ~2 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
REPLACE INTO `comment` (`CMID`, `Comment`, `Name`, `Surname`, `Email`) VALUES
	(1, 'นศ คนนี้ บลาๆ', '', '', ''),
	(2, 'นศ คนนี้ผ่าเนื่องจาก ...', '', '', ''),
	(3, 'นศ .....', 'อาจารย์ชิน ...', 'อัง....', 'Chinna@psu.ac.th');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping structure for table scholarship_system.scholarship
CREATE TABLE IF NOT EXISTS `scholarship` (
  `SLSID` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `SchoType` varchar(100) NOT NULL DEFAULT '',
  `SchoName` varchar(100) NOT NULL DEFAULT '',
  `SchoDetails` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`SLSID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table scholarship_system.scholarship: ~1 rows (approximately)
/*!40000 ALTER TABLE `scholarship` DISABLE KEYS */;
REPLACE INTO `scholarship` (`SLSID`, `SchoType`, `SchoName`, `SchoDetails`) VALUES
	(1, 'ให้ขาด', 'ทุนเพื่อการศึกษา', 'ให้ทุนกับ นศ ตั้งแต่ 500-3000 บาท'),
	(2, 'รุ่นพี่ส่งต่อ', 'ทุนเพื่อการศึกษา2', 'ให้ทุนกับ นศ ตั้งแต่ 5000 บาท/เทอม'),
	(3, 'ทุนอาจารย์', 'ทุนเพื่อการศึกษา', 'ให้ทุนกับ นศ ตั้งแต่ 10000 บาท/เทอม');
/*!40000 ALTER TABLE `scholarship` ENABLE KEYS */;

-- Dumping structure for table scholarship_system.stdregister
CREATE TABLE IF NOT EXISTS `stdregister` (
  `UserID` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `STID` int(200) DEFAULT '0',
  `Year` int(200) NOT NULL,
  `Age` int(200) NOT NULL,
  `Birthday` date NOT NULL,
  `GPA` varchar(10) NOT NULL DEFAULT '',
  `FatherName` varchar(100) NOT NULL DEFAULT '',
  `MotherName` varchar(100) NOT NULL DEFAULT '',
  `HowManyChild` int(200) NOT NULL,
  `HowManyBroSis` int(200) NOT NULL,
  `CurrentAddress` varchar(200) NOT NULL DEFAULT '',
  `Branch` varchar(100) NOT NULL DEFAULT '',
  `Phone` varchar(20) NOT NULL DEFAULT '',
  `Email` varchar(100) NOT NULL DEFAULT '',
  `LineID` varchar(100) NOT NULL DEFAULT '',
  `Facebook` varchar(100) NOT NULL DEFAULT '',
  `AdditionalDocuments_1` varchar(1000) NOT NULL DEFAULT '',
  `AdditionalDocuments_2` varchar(1000) NOT NULL DEFAULT '',
  `AdditionalDocuments_3` varchar(1000) NOT NULL DEFAULT '',
  `CMID` varchar(200) DEFAULT '0',
  `Confirm` char(50) DEFAULT 'n',
  `AMID` varchar(200) DEFAULT '0',
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table scholarship_system.stdregister: ~0 rows (approximately)
/*!40000 ALTER TABLE `stdregister` DISABLE KEYS */;
REPLACE INTO `stdregister` (`UserID`, `STID`, `Year`, `Age`, `Birthday`, `GPA`, `FatherName`, `MotherName`, `HowManyChild`, `HowManyBroSis`, `CurrentAddress`, `Branch`, `Phone`, `Email`, `LineID`, `Facebook`, `AdditionalDocuments_1`, `AdditionalDocuments_2`, `AdditionalDocuments_3`, `CMID`, `Confirm`, `AMID`) VALUES
	(1, 1, 3, 20, '2000-12-23', '3.13', 'เดชา ทองนุ้ย', 'พวง ทองนุ้ย', 1, 1, '75 หมู่ 8 ต.ท่าโพธิ์ อ.สะเดา จ.สงขลา 90170', 'วิทยาการคอมพิวเตอร์', '094-5961886', '6210210167@psu.ac.th', '0945961886', 'Nan Sutaphat', 'รูปถ่าย', '', '', '2', 'Waiting for Confirmation', '1'),
	(2, 2, 3, 20, '2001-03-04', '3.31', 'เพชรนุ้ย', 'เพชรนุ้ย', 1, 1, 'สงขลา', 'วิทยาการคอมพิวเตอร์', '097-3457514', '6210210499@psu.ac.th', '0973457514', 'Manasicha Phetnuy', 'รูปถ่าย1', 'รูปถ่าย2', 'รูปถ่าย3', '1', 'Waiting for Confirmation', '2');
/*!40000 ALTER TABLE `stdregister` ENABLE KEYS */;

-- Dumping structure for table scholarship_system.student
CREATE TABLE IF NOT EXISTS `student` (
  `STID` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `StudentId` varchar(200) NOT NULL,
  `NameTitle` varchar(100) NOT NULL DEFAULT '',
  `Name` varchar(100) NOT NULL DEFAULT '',
  `Surname` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`STID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table scholarship_system.student: ~3 rows (approximately)
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
REPLACE INTO `student` (`STID`, `StudentId`, `NameTitle`, `Name`, `Surname`) VALUES
	(1, '6210210167', 'นางสาว', 'สุตาภัทร ทองนุ้ย', ''),
	(2, '6210210499', 'นางสาว', 'มนสิชา เพชรนุ้ย', ''),
	(3, '6210210000', 'นาย', 'จิรพนธ์', 'จุลบุษรา');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
