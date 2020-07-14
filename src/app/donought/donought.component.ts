import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-donought',
  templateUrl: './donought.component.html',
  styleUrls: ['./donought.component.css']
})
export class DonoughtComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    CanvasJS.addColorSet("greenShades",
    [//colorSet Array

    "red",
    "orange",
    "orangered",
    "#3CB371",
    "#90EE90"                
    ]);

    let chart = new CanvasJS.Chart("chartContainer",{
      // theme: "light1", // "light2", "dark1", "dark2"
      colorSet: "greenShades",
      title: {
        text: "Basic Column Chart - Angular 9"
      },
      data: [
        {
          type: "doughnut", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { x: 10, y: 71 },
                { x: 20, y: 55},
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 95 },
                { x: 60, y: 68 },
                // { x: 70, y: 28 },
                // { x: 80, y: 34 },
                // { x: 90, y: 14}
          ]
        }
      ]
		});
      
    chart.render();
      
      
  }

}
