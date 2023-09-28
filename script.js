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

const book1 = new book("nvr giv up","Adarsh",216,"yes")
const book2 = new book("barbie girl","Ayana", 256, "no")

addBookToLibrary(book1)
addBookToLibrary(book2)

console.log(display(myLibrary))
