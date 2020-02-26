BEGIN;

DROP TABLE IF EXISTS books, authors, publishers authors_books CASCADE;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    publisher_id INTEGER REFERENCES publishers(id),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    price VARCHAR(50),
    language VARCHAR(100),
    reserved BOOLEAN,
    thumbnail TEXT
);

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    country VARCHAR(200),
    name VARCHAR(200),
    book_id INTEGER REFERENCES KEY books(id)
);

CREATE TABLE authors_books (
    book_id INTEGER REFERENCES KEY books(id),
    author_id INTEGER REFERENCES KEY authors(id)
);

INSERT INTO books (publisher_id, title, category, price, language, reserved, thumbnail) VALUES 
(1, 'The Hobbit', 'Fantasy', '20$', 'English', false, 'http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
(2, 'The Two Towers', 'Fiction', '30$', 'English', false, 'http://books.google.com/books/content?id=2jf8Tna_MxMC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
(3, 'Heart of Darkness', 'Fiction', '40$', 'English', false, 'http://books.google.com/books/content?id=8m5qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
;

INSERT INTO authors (first_name, last_name) VALUES 
('J.R.R.', 'Tolkien'),
('Joseph',  'Conrad')
;

INSERT INTO publishers (country, name, book_id) VALUES 
('Uniited States', 'Houghton Mifflin Harcourt', 1),
('UK', 'Del Rey', 2),
('Ukraine', 'Strelbytskyy Multimedia Publishing', 3)
;

INSERT INTO authors_books (book_id, author_id) VALUES 
(1, 1),
(2, 1),
(3, 2)
;

COMMIT;