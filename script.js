const myLibrary = [];

function book(titile,author,pages){
    this.titile = titile;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book){    
    myLibrary.push(book)
    display(myLibrary)
}

function display(myLibrary){
    n = myLibrary.length
    console.log(myLibrary[n-1])
}

const form = document.querySelector('.form-details')
const addBook = document.querySelector('.addBook-button')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const dialog = document.querySelector('dialog')


addBook.addEventListener('click', () => {
    form.reset()
    dialog.showModal()
    })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    dialog.close()
    let books = new book(title.value, author.value, pages.value)
    addBookToLibrary(books)
})

