import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  table: any;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {

    let resp = this.http.get("http://localhost:8082/Table");
    resp.subscribe((data)=> {this.table=data; console.log(data);}
    );
  }

}

