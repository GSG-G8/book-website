const container = document.querySelector('.books_container');

const item = document.createElement('div');
item.classList.add('item');

const cover = document.createElement('div');
cover.classList.add('cover');
const thumbnail = document.createElement('img');
thumbnail.src = 'https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_14601_0-5.jpg?1384968217';
thumbnail.alt = 'the hobbit';
cover.appendChild(thumbnail);

item.appendChild(cover);

const details = document.createElement('div');
details.classList.add('details');
const title = document.createElement('h3');
title.textContent = 'The Hobbit';
details.appendChild(title);

const author = document.createElement('p');
const authorLabel = document.createElement('span');
authorLabel.textContent = 'Author: ';
author.appendChild(authorLabel);
author.textContent += 'J.R.R. Tolkien';
details.appendChild(author);

const category = document.createElement('p');
const categoryLabel = document.createElement('span');
categoryLabel.textContent = 'Category: ';
category.appendChild(categoryLabel);
category.textContent += 'Fantasy';
details.appendChild(category);

const publisher = document.createElement('p');
const publisherLabel = document.createElement('span');
publisherLabel.textContent = 'Publisher: ';
publisher.appendChild(publisherLabel);
publisher.textContent += 'J.R.R. Tolkien';
details.appendChild(publisher);

item.appendChild(details);
container.appendChild(item);
