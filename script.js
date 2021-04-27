let library = {

    divText: "",
    bookNameText: "",
    bookAuthorText: "",
    books: [],
    bookID: 1,

    addBook: function () {
        let book = {
            id: this.bookID,
            bookName: this.bookNameText.value,
            bookAuthor: this.bookAuthorText.value,
        };

        if (this.bookNameText.value === "" || this.bookAuthorText.value === "") alert("Вы должны обязательно ввести название книги и автора!!!");
        else {
            let b = true;
            for (let  i = 0; i < this.books.length; i++) {
                if ( this.books[i].bookName.split(" ").join("").toLowerCase() ===
                    this.bookNameText.value.split(" ").join("").toLowerCase() &&
                    this.books[i].bookAuthor.split(" ").join("").toLowerCase() ===
                    this.bookAuthorText.value.split(" ").join("").toLowerCase()
                ) b = false;
            }
            //console.log(b);
            if (b) {
                this.books.push(book);
                this.bookID++;
                this.bookNameText.value = "";
                this.bookAuthorText.value = "";
            }
            else alert("Такая книга уже существует!!!");
        }
    },

    showBooks: function () {
        let str = "";
        for (let i = 0; i < this.books.length; i++) {
            str += `<b>Id книги: </b>${this.books[i].id}<br>
                    <b>Название книги: </b>${this.books[i].bookName}<br>
                    <b>Автор: </b>${this.books[i].bookAuthor}<br>
                    -----------------------------------------------<br>
                    `;
        }
        this.divText.innerHTML = str;
    },

    init: function () {
        this.divText = document.getElementById('text');
        this.bookNameText = document.getElementById('book-name');
        this.bookAuthorText = document.getElementById('book-author');
    }
}

window.onload = function () {
    library.init();
}