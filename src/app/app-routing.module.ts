import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ReadComponent} from './book/read/read.component';
import {ReadedComponent} from './book/readed/readed.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';


const routes: Routes = [

  {
    path: 'list-read',
    component: ReadComponent
  },
  {
    path: 'list-readed',
    component: ReadedComponent
  },
  {
    path: 'create-book',
    component: BookCreateComponent
  },
  {
    path: 'delete-book',
    component: BookDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
