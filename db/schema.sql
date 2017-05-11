CREATE DATABASE tickit_db;

USE tickit_db;

CREATE TABLE users
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR (255) NOT NULL,
	email VARCHAR(255),
	password VARCHAR (255),
	PRIMARY KEY(id)
);

CREATE TABLE tasks
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	complete BOOLEAN DEFAULT false,
	created_by VARCHAR(255) NOT NULL,
	assigned_to VARCHAR(255),
	date_created DATETIME,
	date_due DATETIME,
	category VARCHAR(255) DEFAULT "Work",
	drawing LONGBLOB,
	link VARCHAR (255),
	PRIMARY KEY(id)
);