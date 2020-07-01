import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'http://localhost:8080';
  booksUrl = '/books';

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get(this.url + this.booksUrl);
  }

  getBookInfo(bookId) {
    const myUrl = this.url + this.booksUrl + '/' + bookId;
    return this.http.get(myUrl);
  }

  addBook(form) {
    const body = { title:  form['title'],
      author: form['author'],
      genre: form['genre'],
      price: form['price'],
      amountAtStorage: form['amount'] };

    this.http.post(this.url + this.booksUrl + '/add', body).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  buyBook(amount, book) {
    const body = { bookId: book,
      numberOfBooks: amount,
      userId: 1 };

    this.http.post(this.url + this.booksUrl + '/checkout', body).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
