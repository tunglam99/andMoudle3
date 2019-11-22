import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]> ('http://localhost:8081/books');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:8081/books', book);
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:8081/books/${id}`);
  }

  edit(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:8081/books/${id}`, book);
  }
}
