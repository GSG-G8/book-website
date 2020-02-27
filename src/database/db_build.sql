BEGIN;

DROP TABLE IF EXISTS publishers, books, authors, authors_books CASCADE;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publisher_id INTEGER REFERENCES publishers(id) ON UPDATE CASCADE,
    category VARCHAR(255),
    reserved BOOLEAN,
    thumbnail TEXT
);


CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);


CREATE TABLE authors_books (
    book_id INTEGER REFERENCES books(id) ON UPDATE CASCADE,
    author_id INTEGER REFERENCES authors(id) ON UPDATE CASCADE
);




INSERT INTO authors (name) VALUES 
('J.R.R. Tolkien'),
('Joseph Conrad');

INSERT INTO publishers (name) VALUES 
('Houghton Mifflin Harcourt'),
('Del Rey'),
('Strelbytskyy Multimedia Publishing');

INSERT INTO books (title, publisher_id, category, reserved, thumbnail) VALUES 
('The Hobbit', 1, 'Fantasy', false, 'http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
('The Two Towers', 2, 'Fiction', false, 'http://books.google.com/books/content?id=2jf8Tna_MxMC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
('Heart of Darkness', 3, 'Fiction', false, 'http://books.google.com/books/content?id=8m5qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
('The Hobbit 1', 1, 'Fantasy', false, 'http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
('The Two Towers 1', 2, 'Fiction', false, 'http://books.google.com/books/content?id=2jf8Tna_MxMC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
('Heart of Darkness 1', 3, 'Fiction', false, 'http://books.google.com/books/content?id=8m5qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
('The Hobbit 2', 1, 'Fantasy', false, 'http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
('The Two Towers 2', 2, 'Fiction', false, 'http://books.google.com/books/content?id=2jf8Tna_MxMC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
('Heart of Darkness 2', 3, 'Fiction', false, 'http://books.google.com/books/content?id=8m5qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
;

INSERT INTO authors_books (book_id, author_id) VALUES 
(1, 1),
(2, 1),
(3, 2),
(4, 1),
(5, 1),
(6, 2),
(7, 1),
(8, 1),
(9, 2);

COMMIT;