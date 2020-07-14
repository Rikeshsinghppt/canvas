import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToHome(val){
    localStorage.setItem('myUser',val.value);
    this.router.navigate(['/']);
  }

  signUp(){
    this.router.navigate(['/register']);
  }

  forgate(){
    this.router.navigate(['/fpassword']);
  }
}
