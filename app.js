// Book class: represent a Book
 class Book {
     constructor(title, author, isbn) {
         this.title = title;
         this.author = author;
         this.isbn = isbn;
     }
 }


//UI Class: handle Ui Tasks
class UI {
    static displayBooks ( ) {
        const StoreBooks = [ 
            
            {
                title: 'Book 1',
                author: 'leila',
                isbn: '454545'
            },

            {
                title: 'Book 2',
                author: 'shahrzad',
                isbn: '464545'
            }
        ];

        const books = StoreBooks;
        
        books.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

      const  row = document.createElement('tr');
        row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td><a href='#' class= 'btn btn-danger btn.sm delete'>x</a></td>

        `;

        list.appendChild(row)
    };

  static  deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()

        }

    };


    static clearFields () {
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}

// store Class: handle storage

// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',function(e) { 
 
e.preventDefault
      //Get Form Value
     const title = document.querySelector('#title').value;
     const author = document.querySelector('#author').value;
     const isbn = document.querySelector('#isbn').value;

     //instantiate a book
     const book = new Book ( title, author, isbn);
     console.log(book)

     UI.addBookToList(book)
     UI.clearFields()

  }); 
    
// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click', function(e){
    
    console.log(UI.deleteBook(e.target))
})