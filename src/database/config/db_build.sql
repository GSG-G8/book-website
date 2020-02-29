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
    name VARCHAR(255),
    book_id INTEGER REFERENCES books(id) ON UPDATE CASCADE
);



INSERT INTO publishers (name) VALUES 
('Houghton Mifflin Harcourt'),
('Del Rey'),
('Strelbytskyy Multimedia Publishing'),
('The Floating Press'),
('Penguin Group USA'),
('Church Publishing, Inc.')
;

INSERT INTO books (title, publisher_id, category, reserved, thumbnail) VALUES 
('The Hobbit', 1, 'Fantasy', false, 'https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_14601_0-5.jpg?1384968217'),
('The Two Towers', 2, 'Fiction', false, 'http://books.google.com/books/content?id=2jf8Tna_MxMC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
('Heart of Darkness', 3, 'Fiction', false, 'https://prodimage.images-bn.com/pimages/9781435168480_p0_v1_s550x406.jpg'),
('At the Foot of the Rainbow', 4, 'Romance', false, 'https://pictures.abebooks.com/DORLEYHOUSEBOOKS/8585007761.jpg'),
('Women in love', 5, 'Romance', false, 'https://kbimages1-a.akamaihd.net/1e834c8e-1cff-44e9-b189-b75cfa5bab9d/1200/1200/False/women-in-love-115.jpg'),
('All Things Bright and Beautiful', 6, 'Medicine', false, 'https://images-na.ssl-images-amazon.com/images/I/518cwHj0g0L._SX334_BO1,204,203,200_.jpg')
;

INSERT INTO authors (name, book_id) VALUES 
('J.R.R. Tolkien', 1),
('J.R.R. Tolkien', 2),
('Joseph Conrad', 3),
('Gene Stratton-Porter', 4),
('D. H. Lawrence', 5),
('James Herriot', 6)
;

COMMIT;