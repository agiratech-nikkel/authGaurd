import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService implements CanActivate{

  constructor(private router:Router) { }
  logst:any
  loginStatus(value: string) {
    localStorage.setItem('loginStatus', value)
  }
  canActivate():boolean {
    this.logst = window.localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')!):Boolean
    console.log(this.logst)
    if(this.logst) {
      return true;
    }else{
      this.router.navigate(['/login'])
    }
    return false;
  }
}
