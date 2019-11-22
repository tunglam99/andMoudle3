import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.scss']
})
export class ReadedComponent implements OnInit {

  bookList: Book[] = [];
  constructor(private bookService: BookService ) { }

  ngOnInit() {
    this.bookService.getAllBook().subscribe(result => {
      this.bookList = result;
    });
  }

}
