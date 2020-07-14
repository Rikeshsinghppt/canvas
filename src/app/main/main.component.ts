import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CrudService } from '../crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  sideBarToggle=false;
  constructor(private router:Router) { }

  ngOnInit() {

   /*  setInterval(()=>{    //
      let val = Math.ceil(Math.random()*100);
      // this.cardsData.push(25);
      //  console.log(this.cardsData.push(val))
       this._utilityServices.stream.next(val);
      //  console.log(this._utilityServices.cards());
     },2000);
 */
   let user =  localStorage.getItem('myUser');
   if(user != null){
      this.router.navigate(['/'])
   }else{
     this.router.navigate(['/Userlog'])
   }
  }
  toggleSide(event){
     this.sideBarToggle = !this.sideBarToggle;
  }

 
}
