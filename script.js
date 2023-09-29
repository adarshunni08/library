const myLibrary = [];

function book(titile,author,pages,yesno){
    this.titile = titile;
    this.author = author;
    this.pages = pages;
    this.yesno = yesno;
}

function addBookToLibrary(book){    
    myLibrary.push(book)
}

function display(myLibrary){
    n = myLibrary.length
    for (let i=0; i<n; i++){
        console.log(myLibrary[i])
    }
}

const form = document.querySelector('.details')
form.style.display = 'none'

const addBook = document.querySelector('.addBook-button')
addBook.addEventListener('click', () => {
    form.style.display = 'block'
})






