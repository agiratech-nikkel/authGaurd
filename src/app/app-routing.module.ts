import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthservicesService } from './login/authservices.service';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {  
    path: 'book',canActivate:[AuthservicesService], loadChildren: () => import('./book/book.module').then(m => m.BookModule) 
  },
  { 
    path: 'book/book-detail/:titel', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailModule) 
  },
  {
    path:'**', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
