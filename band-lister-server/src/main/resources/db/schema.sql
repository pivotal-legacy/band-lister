DROP TABLE IF EXISTS bands;

create table bands (
  id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100),
  member_count INT
);

create table accounts (
  id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(100),
  password VARCHAR(100)
)
