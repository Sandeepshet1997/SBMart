import { userdetails } from './userinstance';
import { map, mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthuuService {
  user$:Observable<firebase.User>;
  static exist:boolean;
  constructor(public afauth:AngularFireAuth ) { 
    this.user$= afauth.authState;
    
    
  }

  loginS(){
      this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

  logoutS(){
      this.afauth.auth.signOut();
      
  }

    async isAthenticated(){
          this.afauth.authState.subscribe(x=>{
            if(x){
              console.log("entered if")
              AuthuuService.exist=true;  
            }
            else{
              AuthuuService.exist=false;
            }

    })
    console.log(AuthuuService.exist)
    return AuthuuService.exist;
  }

}
