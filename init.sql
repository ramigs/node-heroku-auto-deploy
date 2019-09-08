CREATE TABLE albums (
  ID SERIAL PRIMARY KEY,
  artist VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);

INSERT INTO albums (artist, title)
VALUES  ('The Offspring', 'Americana');

