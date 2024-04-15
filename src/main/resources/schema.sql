CREATE TABLE IF NOT EXISTS 'Kinobillett' (
    id INT PRIMARY KEY AUTO_INCREMENT,
    film VARCHAR(255) NOT NULL,
    antall INT NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefon BIGINT NOT NULL,
    epost VARCHAR(255) NOT NULL
);








/* CREATE TABLE Kinobillett (
    billettnr INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR(255) NOT NULL,
    antall INTEGER(999) NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefon INTEGER(8) NOT NULL,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (billettnr)
    ); */