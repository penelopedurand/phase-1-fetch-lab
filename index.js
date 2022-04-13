function fetchBooks() {
  return fetch ('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json))
  // To pass the tests, don't forget to return your fetch!
  // return to jSon
  // call function renderBook
  // check if Game of Thrones titles open
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
