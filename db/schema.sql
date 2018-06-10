DROP DATABASE samepage_db;
CREATE DATABASE samepage_db;
use samepage_db; 


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

