import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  constructor(private booksService: BooksService, ) { }

  ngOnInit(): void {
   this.booksService.getBooks().subscribe((data) => {
      console.log('OBJECT: ' );
      console.log(data);
      this.books = data['data'];
  });
  }
}
