import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BookdataService } from '../BookData/bookdata.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
getBookId:any
Bookdata:any
  constructor(private router:ActivatedRoute,private data:BookdataService) { }
  ngOnInit(): void {
    this.getBookId = this.router.snapshot.paramMap.get('titel')
    console.log(this.getBookId)
    this.Bookdata = this.data.Books.filter((value)=>{
      return value.title == this.getBookId
    })
    console.log(this.Bookdata)
  }

}
