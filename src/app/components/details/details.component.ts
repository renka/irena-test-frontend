import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bookId;
  info;
  checkoutForm;
  constructor(
    public formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.checkoutForm = this.formBuilder.group({
    amount: ''
  }); }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.id;
    this.booksService.getBookInfo(this.bookId).subscribe(
      data => {
      console.log('INFO: ' );
      console.log( data);
      this.info = data['data'];
    },
      error => {
        console.log('Error:', error);
        this.router.navigate(['/error'])
      });
  }

  purchase(amount) {
    this.booksService.buyBook(amount, this.info['id']);
    this.router.navigate(['/payment']);
  }
}
