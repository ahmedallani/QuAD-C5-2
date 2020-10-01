DROP DATABASE IF EXISTS quad;

CREATE DATABASE quad;

USE quad;

CREATE TABLE users (
    userID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(20),
    LastName varchar(20),
    Email varchar(30),
    Password varchar(50),
    PRIMARY KEY (userID)
);

CREATE TABLE UserDescription (
    userID int NOT NULL AUTO_INCREMENT,
    Age int NOT NULL,
    Avatar varchar(50),
    Description varchar(30),
    PhoneNumber int(25),
    Skills varchar(60),
    -- PRIMARY KEY (ID),
    FOREIGN KEY (userID) REFERENCES users(usersID)
);

CREATE TABLE jobOffers (
    ID int NOT NULL AUTO_INCREMENT,
    companyId varchar(25),
    JobTitle varchar(25),
    Description varchar(50),
    PRIMARY KEY (ID)
);

INSERT INTO users (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");
INSERT INTO users (id, FirstName ,LastName, Email, Password) VALUES (2,"Ahmed","Ezzine","QuiteB@Deadly.com","test");
-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYSINSERT INTO signup (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");
-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYSINSERT INTO signup (id, FirstName ,LastName, Email, Password) VALUES (1,"Ahmed","Ezzine","QuiteB@Deadly.com","test");

-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYS
-- copy this in the terminal mysql
-- mysql -u root -p < accounts.sql


INSERT INTO UserDescription (id, Age , Avatar, Description , PhoneNumber , Skills) VALUES (1,17,"srcImageLink","QuiteBDeadly",2525753,"Skills");
INSERT INTO UserDescription (id, Age , Avatar, Description , PhoneNumber , Skills) VALUES (2,17,"srcImageLink","QuiteBDeadly",2525753,"Skills");
-- INSERT INTO describe (id, Age ,Avatar, Description,PhoneNumber, Skills) VALUES (2,17,"srcImageLink","QuiteBDeadly",2525753,"Skills");
-- INSERT INTO describe (id, Age ,Avatar, Description,PhoneNumber, Skills) VALUES (3,19,"srcImageLink","QuiteBDeadly",000666,"Skills");

INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (1,"companyName","CompanyTitle","789");
INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (2,"Ezzines company","test","freeelance");
INSERT INTO jobOffers (id ,companyId,JobTitle,Description) VALUES (3,"7851","CompanyTitle","123");