CREATE DATABASE proyectoCrudDb;

USE proyectoCrudDb;

CREATE TABLE juegos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);