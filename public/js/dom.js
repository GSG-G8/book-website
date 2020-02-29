const addButton = document.querySelector('.add-btn');

function renderBook(data) {
  const container = document.querySelector('.books_container');
  const item = document.createElement('div');
  const cover = document.createElement('div');
  const thumbnail = document.createElement('img');
  const details = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const category = document.createElement('p');
  const publisher = document.createElement('p');

  title.textContent = data.title;
  author.textContent = `Author: ${data.authors_name}`;
  category.textContent = `Category: ${data.category}`;
  publisher.textContent = `Publisher: ${data.publisher_name}`;

  item.classList.add('item');
  cover.classList.add('cover');
  details.classList.add('details');
  title.classList.add('title');
  thumbnail.src = data.thumbnail;
  thumbnail.alt = data.title;

  cover.appendChild(thumbnail);
  item.appendChild(cover);
  details.appendChild(title);
  details.appendChild(author);
  details.appendChild(category);
  details.appendChild(publisher);
  item.appendChild(details);
  container.appendChild(item);
}
// https://g8-book-website.herokuapp.com
function getBook() {
  fetch('/getBook')
    .then((response) => response.json())
    .then((data) => {
      if (data.length !== 0) {
        const container = document.querySelector('.books_container');
        container.textContent = '';
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


// Search book
const searchQuery = document.querySelector('.query-search');
const searchBook = document.querySelector('.search-btn');
searchBook.addEventListener('click', () => {
  const filter = searchQuery.value.toUpperCase();
  const items = document.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {
    const title = items[i].querySelector('.title');
    const titleVal = title.textContent;
    if (titleVal.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
});
