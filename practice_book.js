function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = read; 
    this.info = function() {
        return title, " written by ", author, pages, read;
    }
}

const Books = {

}


console.log(Book.info)