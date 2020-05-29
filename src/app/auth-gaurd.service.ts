import { async } from '@angular/core/testing';
import { map, mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, RouterModule, Router } from '@angular/router';
import { AuthuuService } from './authuu.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  static userexist: boolean;
  constructor(private authu: AuthuuService, private router: Router) { }

async canActivate() {
  console.log(this.authu.isAthenticated())
        if(this.authu.user$){
          return true;        }
        else{
          return false;
          this.router.navigate(['/login']);
          
        }
        
  }
}
