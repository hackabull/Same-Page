DROP DATABASE IF EXISTS samepage_db;
CREATE DATABASE samepage_db;
use samepage_db; 


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(225) NOT NULL,
    email varchar(225) NOT NULL,
    password varchar (225) NOT NULL,
    adult boolean default true,
    family_id int NOT NULL,
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

