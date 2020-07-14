import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  table: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    let resp = this.http.get("http://localhost:8082/Table");
    resp.subscribe((data)=> {this.table=data; console.log(data);}
    );


  }

}

