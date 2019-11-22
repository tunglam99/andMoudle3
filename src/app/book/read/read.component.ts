import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private bookService: BookService ) { }

  ngOnInit() {
    this.bookService.getAllBook().subscribe(result => {
      this.bookList = result;
    });
  }

  readBook(id: number) {
    this.bookList[id].read = true;
    this.bookService.edit(id + '', this.bookList[id]).subscribe(() => {
      console.log('Sửa thành công');
    }, error1 => {
      console.log('Lỗi ' + error1);
    });
  }

}
