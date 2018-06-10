CREATE DATABASE tobringlist_db;
use tobringlist_db; 


CREATE TABLE tobringlistitem 
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);