function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

const library = [];

function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';
  
  library.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    card.innerHTML = `
      <h4>${book.title}</h4>
      <p><strong>Müəllif:</strong> ${book.author}</p>
      <p><strong>Status:</strong> ${book.isRead ? 'Oxunub' : 'Oxunmayıb'}</p>
    `;
    
    libraryDiv.appendChild(card);
  });
}

const addBookBtn = document.getElementById('addBookBtn')

addBookBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isRead = document.getElementById('read').checked;
  
  if (title === '' || author === '') {
    alert('Zəhmət olmasa kitabın adını və müəllifi daxil edin.');
    return;
  }
  
  const newBook = new Book(title, author, isRead);
  addBookToLibrary(newBook);
  
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('read').checked = false;
});
