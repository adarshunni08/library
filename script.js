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
    let data = document.createElement('div')
    data.classList.add('data')
    dataDisplay.appendChild(data)
    data.style.display = 'flex';
    data.style.flexDirection = 'column';
    data.style.justifyContent = 'space-between';
    data.style.alignItems = 'center';
    data.style.fontSize = '32px';
    data.style.width = '400px';
    data.style.height = 'auto';
    data.style.backgroundColor = 'white';
    data.style.borderRadius = '16px';
    data.style.fontSize = '32px';
    data.style.lineHeight = '1.2';
    data.style.fontWeight = '500';
    data.style.wordBreak = 'break-word';
    data.style.flexWrap = 'wrap';
    data.style.padding = '32px';
    let bookName = document.createElement('p')
    let authorName = document.createElement('p')
    let noOfPages = document.createElement('p')
    let remove = document.createElement('button')
    data.appendChild(bookName)
    data.appendChild(authorName)
    data.appendChild(noOfPages)
    data.appendChild(remove)
    remove.style.fontWeight = '700';
    remove.style.backgroundColor = 'green';
    remove.style.color = 'white'
    bookName.textContent = "Title: " + myLibrary[n-1].titile
    authorName.textContent =  "Author: " + myLibrary[n-1].author
    noOfPages.textContent =   "Pages: " + myLibrary[n-1].pages 
    remove.textContent = 'remove'
    remove.addEventListener('click', () => {
        data.remove()
    })

}

const form = document.querySelector('.form-details')
const addBook = document.querySelector('.addBook-button')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const dialogForm = document.querySelector('.user-data')
const dataDisplay = document.querySelector('.data-display')


addBook.addEventListener('click', () => {
    form.reset()
    dialogForm.showModal()
    })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    dialogForm.close()
    let books = new book(title.value, author.value, pages.value)
    addBookToLibrary(books)
})



