import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthuuService } from '../authuu.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  constructor(private afAuth:AuthuuService) { 
   
  }

  ngOnInit() {
  }
  logout(){
    this.afAuth.logoutS();
  }

}
