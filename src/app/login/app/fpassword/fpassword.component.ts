import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTologin(){
    this.router.navigate(['/Userlog']);
  }
}
