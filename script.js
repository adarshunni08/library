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

const addBookButton = document.querySelector('.addBook-button')
addBookButton.addEventListener('click', () => {
    const form = document.getElementById('form')

    if (form.style.display === 'none'){
        form.style.visibility = 'visible'
    }
    else{
        form.style.visibility = 'hidden'
    }

})






