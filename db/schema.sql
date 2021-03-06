DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE items ( id INT NOT NULL, name VARCHAR(100), PRIMARY KEY (id));

CREATE TABLE itemReviews ( id INT NOT NULL AUTO_INCREMENT, rating INT NOT NULL, title VARCHAR(100) NOT NULL, date DATE NOT NULL, text VARCHAR(2000), source VARCHAR(40) NOT NULL, item_id INT NOT NULL, PRIMARY KEY (id));
