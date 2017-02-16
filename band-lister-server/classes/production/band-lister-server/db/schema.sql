DROP TABLE IF EXISTS bands;

create table bands (
  id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100),
  member_count INT
);
