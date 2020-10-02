DROP DATABASE IF EXISTS quad;

CREATE DATABASE quad;

USE quad;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    Avatar varchar(50),
    FirstName varchar(20),
    LastName varchar(20),
    Email varchar(30),
    Password varchar(50),
    Age int,
    PhoneNumber int(25),
    Description varchar(30),
    Skills varchar(60),
    PRIMARY KEY (ID)
);


CREATE TABLE jobOffers (
    ID int NOT NULL AUTO_INCREMENT,
    companyId varchar(25),
    jobTitle varchar(25),
    Description varchar(50),
    PRIMARY KEY (ID)
);

CREATE TABLE company (
    id int NOT NULL AUTO_INCREMENT,
    Name varchar(25),
    Email varchar(25),
    Password varchar(25),
    Location varchar(25),
    PhoneNumber varchar(25),
    primary key (ID)
);

CREATE TABLE applications (
    id int NOT NULL AUTO_INCREMENT,
    userId int NOT NULL,
    jobOfferId int NOT NULL,
    primary key (ID)
);

-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYS
-- copy this in the terminal mysql
-- mysql -u root -p < accounts.sql

INSERT INTO users (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");
INSERT INTO users (id, FirstName ,LastName, Email, Password) VALUES (2,"Ahmed","Ezzine","QuiteB@Deadly.com","test");

INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (1,"companyName","CompanyTitle","789");
INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (2,"Ezzines company","test","freeelance");
INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (3,"7851","CompanyTitle","123");
-- 

INSERT INTO company (id, Name, Email, Password,Location,PhoneNumber) VALUES (1, 'TEST', 'TEST@GMAIL.COM', 'PWDTEST123', 'TUNISIA',785452);
INSERT INTO company (id, Name, Email, Password,Location,PhoneNumber) VALUES (2, '2TEST', '2TEST@GMAIL.COM', '2PWDTEST123', '2TUNISIA',412287451);
INSERT INTO company (id, Name, Email, Password,Location,PhoneNumber) VALUES (3, '3TT', '3-TEST@GMAIL.COM', '3-PWDTEST123', '3-TUNISIA',552858);



-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYSINSERT INTO signup (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");
-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYSINSERT INTO signup (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");

-- INSERT INTO describe (id, Age ,Avatar, Description,PhoneNumber, Skills) VALUES (2,17,"srcImageLink","QuiteBDeadly",2525753,"Skills");
-- INSERT INTO describe (id, Age ,Avatar, Description,PhoneNumber, Skills) VALUES (3,19,"srcImageLink","QuiteBDeadly",000666,"Skills");