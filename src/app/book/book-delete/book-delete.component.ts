import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {Subscription} from 'rxjs';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  book: Book;
  sub: Subscription;
  failMessage: string;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.deleteBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.failMessage = error.toString();
      });
    });
  }

}
