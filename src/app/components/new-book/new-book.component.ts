import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  createForm;

  constructor(public formBuilder: FormBuilder, private booksService: BooksService, ) {
    this.createForm = this.formBuilder.group({
      title: '',
      author: '',
      genre: '',
      price: '',
      amount: ''
    });
  }


  ngOnInit(): void { }

  saveBook(customerData) {
    this.createForm.reset();

    console.warn('Your order has been submitted', customerData);

    this.booksService.addBook(customerData);
  }
}
