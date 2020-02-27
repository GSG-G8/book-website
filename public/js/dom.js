const addButton = document.querySelector('.add-btn');

function renderBook(data) {
  const container = document.querySelector('.books_container');
  const item = document.createElement('div');
  const cover = document.createElement('div');
  const thumbnail = document.createElement('img');
  const details = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const authorLabel = document.createElement('span');
  const category = document.createElement('p');
  const categoryLabel = document.createElement('span');
  const publisher = document.createElement('p');
  const publisherLabel = document.createElement('span');

  title.textContent = data.title;
  authorLabel.textContent = 'Author: ';
  author.textContent += data.name;
  categoryLabel.textContent = 'Category: ';
  category.textContent += data.category;
  publisherLabel.textContent = 'Publisher: ';
  publisher.textContent += data.publisher_name;

  item.classList.add('item');
  cover.classList.add('cover');
  details.classList.add('details');
  thumbnail.src = data.thumbnail;
  thumbnail.alt = data.title;

  cover.appendChild(thumbnail);
  item.appendChild(cover);
  details.appendChild(title);
  author.appendChild(authorLabel);
  details.appendChild(author);
  category.appendChild(categoryLabel);
  details.appendChild(category);
  publisher.appendChild(publisherLabel);
  details.appendChild(publisher);
  item.appendChild(details);
  container.appendChild(item);
}

function getBook() {
  fetch('https://g8-book-website.herokuapp.com/getBook')
    .then((response) => response.json())
    .then((data) => {
      if (data.length !== 0) {
        const container = document.querySelector('.books_container');
        container.textContent = '';
        console.log(data);
        data.forEach((element) => renderBook(element));
      }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
  getBook();
});

addButton.addEventListener('submit', (event) => {
  getBook();
});
