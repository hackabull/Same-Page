DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

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