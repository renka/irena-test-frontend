import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooksComponent} from './components/books/books.component';
import {NewBookComponent} from './components/new-book/new-book.component';
import {DetailsComponent} from './components/details/details.component';
import {PaymentComponent} from './components/payment/payment.component';
import {ErrorPageComponent} from "./components/error-page/error-page.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: DetailsComponent },
  { path: 'add', component: NewBookComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
