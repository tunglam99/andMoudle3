import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  successMessage: string;
  failMessage: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  addBook(bookForm) {
    this.bookService.createBook(bookForm.value).subscribe(() => {
      this.successMessage = 'Tạo mới thành công';
    }, () => {
      this.failMessage = 'Tạo mới thất bại';
    });
  }

}
