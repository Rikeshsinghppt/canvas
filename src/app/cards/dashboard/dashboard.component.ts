 import { Component, OnInit, Inject,ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import * as CanvasJS from '../../canvasjs.min.js';
import { DevicesService } from 'src/app/devices.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {Device} from 'src/app/device';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['status', 'modelNo','location', 'temperature','voltage'];
  dataSource = new MatTableDataSource<any>();
  devices: Device[];
  deviceData: any=[];

  constructor(private devicesService: DevicesService,
    @Inject('BaseURL') private BaseURL,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    this.devicesService.getDevices()
    .subscribe((devices:any) => {
      console.log("@@", devices)
      this.deviceData = devices
     // this.devices = devices
     this.dataSource.data = this.deviceData;
    });
    console.log(this.dataSource);
    
    console.log(this.dataSource);

    CanvasJS.addColorSet("greenShades",
    ["green" , "yellow","red"]);

    let chart = new CanvasJS.Chart("chartContainer",{
      colorSet: "greenShades",
       title: {
        text: "Solar Cleaner Status",
        fontSize : 15
      },
      subtitles:[
        {
          text: "8 Solar Cleaners",
          verticalAlign: "center",
          dockInsidePlotArea: true,
          fontSize: 15,
        },
        ],

        legend: {
          horizontalAlign: "right", // "center" , "right"
          verticalAlign: "center",  // "top" , "bottom"
          fontSize: 15
        },
      data: [
        {
          type: "doughnut",
          showInLegend: true, 
          legendPosition: "right",
          dataPoints: [{ x: 'Active', y: 5, legendText:"Active (5)"},
          { x: 'Inactive', y: 2, legendText:"Inactive (2)"},
          { x: 'Inactive Since More Than One day', y: 1, legendText: "Inactive Since More Than One day (1)"}]
        }
      ]
		});
      
    chart.render();


    let chart2 = new CanvasJS.Chart("chartContainer2",{
      colorSet: "greenShades",
      
      
       title: {
        text: "Solar Cleaner voltages",
        fontSize : 15
      },
     subtitles:[
        {
          text: "8 Solar Cleaners",
          verticalAlign: "center",
          dockInsidePlotArea: true,
          fontSize: 15,
        },
        ],

        legend: {
          horizontalAlign: "right", // "center" , "right"
          verticalAlign: "center",  // "top" , "bottom"
          fontSize: 15
        },
      data: [
        {
          type: "doughnut",
          showInLegend: true, 
          legendPosition: "right",
    dataPoints: [{ x: 'Normal Voltages', y: 8, legendText: "Normal Voltages (8)" },
                 { x: 'Under Voltages', y: 0, legendText: "Under Voltages (0)"}]
        }
      ]
		});
      
    chart2.render();

    let chart3 = new CanvasJS.Chart("chartContainer3",{
      colorSet: "greenShades",
       title: {
        text: "Solar Cleaner Temperature",
        fontSize : 15
      },
      subtitles:[
        {

          text: "8 Solar Cleaners",
          verticalAlign: "center",
          dockInsidePlotArea: true,
          fontSize: 15,
        },
        ],
        legend: {
          horizontalAlign: "right", // "center" , "right"
          verticalAlign: "center",  // "top" , "bottom"
          fontSize: 15
        },
      data: [
        {
          type: "doughnut",
          showInLegend: true, 
          legendPosition: "right",
          dataPoints: [{ x: 'Normal Temperature ', y: 7, legendText: "Normal Temperature (7)" },
          { x: 'Under Temperature', y: 1, legendText: "Under Temperature (1)" }]
        }
      ]
		});
      
    chart3.render();

  }
  

  myalert(){
    this.router.navigate(['/Alerts']);
  }

  mainpage(){
    this.router.navigate(['/Solar1']);
  }
   
  title(){
    this.router.navigate(['/Solar1']);
  }
  picked : any;
  public highlightSelectedRow(row): void
      {
          this.picked = row._id;
          this.router.navigate(['solar', this.picked]);
      }
}
 