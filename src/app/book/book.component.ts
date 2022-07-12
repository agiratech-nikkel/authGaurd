import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../BookData/bookdata.service'
import { AuthservicesService } from '../login/authservices.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
BookData:any
constructor(private BookDataServive:BookdataService,private logof:AuthservicesService ) { }

  ngOnInit(): void {
    this.BookData = this.BookDataServive.Books
    console.log(this.BookData)
  }
logoff(){
  this.logof. loginStatus("false")
}

}
