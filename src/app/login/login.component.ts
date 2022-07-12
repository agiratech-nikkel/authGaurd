import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../BookData/bookdata.service'
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthservicesService } from './authservices.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserData:any
  udata:any
  constructor(private BookDataServive:BookdataService, private authService: AuthservicesService, private router:Router) { }
  ngOnInit(): void {
  this.UserData = this.BookDataServive.userData
  localStorage.setItem('UserData',JSON.stringify(this.UserData))
  console.log(this.userLogin)
  this.udata = window.localStorage.getItem('UserData') ? JSON.parse(localStorage.getItem('UserData')!):{}
  
  }
  logginStatus(value: string){
    console.log('Login Fun', value)
    this.authService.loginStatus(value)
  }
  userLogin = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('',[Validators.required]),
  })
  onSubmit(){
    console.log(this.UserData[0])
    console.log(this.userLogin.controls['UserName'].value, this.UserData[0].userName) 
    console.log(this.userLogin.controls['Password'].value, this.UserData[0].password)
    if(this.UserData[0].userName === this.userLogin.controls['UserName'].value && this.UserData[0].password === this.userLogin.controls['Password'].value) {
      this.logginStatus('true')
    } else {
      this.logginStatus('false')
    }
    this.router.navigate(['/book'])
  }
}
