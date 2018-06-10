DROP DATABASE k3kgmp6y1wyvyq3t;
CREATE DATABASE k3kgmp6y1wyvyq3t;
use k3kgmp6y1wyvyq3t; 

CREATE TABLE `parentmessages` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);



CREATE TABLE UserInfo
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	user_name varchar (255) NOT NULL,
	email varchar (255) NOT NULL,
	password varchar (255),
	PRIMARY KEY (id)
	
);

CREATE TABLE tobringlistitem 
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	brought BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE calendar 
(
	id int NOT NULL AUTO_INCREMENT,
	event varchar(255) NOT NULL,
	date varchar(100) NOT NULL,
	time varchar(100) NOT NULL,
	PRIMARY KEY (id)
);

