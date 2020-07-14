import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../canvasjs.min';
import { DevicesService } from 'src/app/devices.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/device';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {

  device : any;
  //id  : string;
 //this.id = "5f045ae18a1e4d0017b182ba";
  constructor(private deviceservice: DevicesService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.params['_id'];
   // console.log(id);
    this.deviceservice.fetchDevice(id).
    subscribe((device:any) => {
      // console.log("@@",id)
      this.device = device
     // this.devices = devices
    });
     CanvasJS.addColorSet("greenShades",
     [//colorSet Array
 
     "red",
     "orange",
     "orangered",
     "#3CB371",
     "#90EE90"                
     ]);
     
     //  temperature block ======----------->>>>
 
     var chart1 = new CanvasJS.Chart("chartContainer", {
       animationEnabled: true,  
       title:{
         text:"temperature(celcius)",
         fontSize: 15
       },
       axisX:{
         title: "time",
         interval:2, 
         intervalType: "hour",        
         valueFormatString: "hh TT", 
         labelAngle: 0
       },
 
       axisY: {
         title: "Temperature",
         suffix: "*c",
         tickLength: 0,
         gridThickness: 0.4,
         // stripLines: [{
         //   value: 33,
         //   color: "gray",
         //   label: "Average"
         // }]
       },
       data: [{
         yValueFormatString: "#### Units",
         xValueFormatString: "YYYY",
         type: "spline",
         dataPoints: [
           {x: new Date(Date.UTC (2020, 6, 1, 1,0) ), y: 26 },
           {x: new Date( Date.UTC (2020, 6, 1,2,0) ), y: 38  },
           {x: new Date( Date.UTC(2020, 6, 1,3,0) ), y: 43 },
           {x: new Date( Date.UTC(2020, 6, 1,4,0) ), y: 29},
           {x: new Date( Date.UTC(2020, 6, 1,5,0) ), y: 41},
           {x: new Date( Date.UTC(2020, 6, 1,6,0) ), y: 54},
           {x: new Date( Date.UTC(2020, 6, 1,7,0) ), y: 36},
           {x: new Date( Date.UTC(2020, 6, 1,8,0) ), y: 30},
           {x: new Date( Date.UTC(2020, 6, 1,9,0) ), y: 33},
           {x: new Date( Date.UTC(2020, 6, 1,10,0) ), y: 36},
           
   
         ]
       }]
     });
     chart1.render();
 
 
     //  Humidity Block Starts here ======----------->>>>>>
 
     var chart2 = new CanvasJS.Chart("chartContainer2", {
       animationEnabled: true,  
       title:{
         text:"Humidity(%)",
         fontSize: 15
       },
       axisX:{
         title: "time",
         // gridThickness: 1,
         interval:2, 
         intervalType: "hour",        
         valueFormatString: "hh TT", 
         labelAngle: 0
       },
 
       axisY: {
         title: "Humidity",
         tickLength: 0,
         gridThickness: 0.4,
         // valueFormatString: "#0,,.",
         // suffix: "*c",
         // stripLines: [{
         //   value: 33,
         //   label: "Average"
         // }]
       },
       data: [{
         yValueFormatString: "#### Units",
         xValueFormatString: "YYYY",
         type: "spline",
         dataPoints: [
           {x: new Date(Date.UTC (2020, 6, 1, 1,0) ), y: 76 },
           {x: new Date( Date.UTC (2020, 6, 1,2,0) ), y: 78  },
           {x: new Date( Date.UTC(2020, 6, 1,3,0) ), y: 63 },
           {x: new Date( Date.UTC(2020, 6, 1,4,0) ), y: 69},
           {x: new Date( Date.UTC(2020, 6, 1,5,0) ), y: 49},
           {x: new Date( Date.UTC(2020, 6, 1,6,0) ), y: 59},
           {x: new Date( Date.UTC(2020, 6, 1,7,0) ), y: 66},
           {x: new Date( Date.UTC(2020, 6, 1,8,0) ), y: 90},
           {x: new Date( Date.UTC(2020, 6, 1,9,0) ), y: 93},
           {x: new Date( Date.UTC(2020, 6, 1,10,0) ), y: 56},
           
   
         ]
       }]
     });
     chart2.render();
 
        
     // Battery Voltage Block Starts here ======----------->>>>>>
 
     var chart3 = new CanvasJS.Chart("chartContainer3", {
       animationEnabled: true,  
       title:{
         text:"Battery Voltage(volts)",
         fontSize: 15
       },
       axisX:{
         title: "time",
         // gridThickness: 1,
         interval:2, 
         intervalType: "hour",        
         valueFormatString: "hh TT", 
         labelAngle: 0
       },
 
       axisY: {
         title: "Voltage",
         tickLength: 0,
         gridThickness: 0.4,
         // valueFormatString: "#0,,.",
         // suffix: "*c",
         // stripLines: [{
         //   value: 106,
         //   label: "Average"
         // }]
       },
       data: [{
         yValueFormatString: "#### Units",
         xValueFormatString: "YYYY",
         type: "spline",
         dataPoints: [
           {x: new Date(Date.UTC (2020, 6, 1, 1,0) ), y: 206 },
           {x: new Date( Date.UTC (2020, 6, 1,2,0) ), y: 138  },
           {x: new Date( Date.UTC(2020, 6, 1,3,0) ), y: 143 },
           {x: new Date( Date.UTC(2020, 6, 1,4,0) ), y: 79},
           {x: new Date( Date.UTC(2020, 6, 1,5,0) ), y: 81},
           {x: new Date( Date.UTC(2020, 6, 1,6,0) ), y: 104},
           {x: new Date( Date.UTC(2020, 6, 1,7,0) ), y: 136},
           {x: new Date( Date.UTC(2020, 6, 1,8,0) ), y: 140},
           {x: new Date( Date.UTC(2020, 6, 1,9,0) ), y: 173},
           {x: new Date( Date.UTC(2020, 6, 1,10,0) ), y: 86},
           
   
         ]
       }]
     });
     chart3.render();
     
     
     // Solar Panel Voltage Block Starts here ======----------->>>>>>
 
     var chart4 = new CanvasJS.Chart("chartContainer4", {
       animationEnabled: true,  
       title:{
         text: "Solar Panel Voltage(voltages)",
         fontSize: 15
       },
       axisX:{
         title: "time",
         // gridThickness: 1,
         interval:2, 
         intervalType: "hour",        
         valueFormatString: "hh TT", 
         labelAngle: 0
       },
 
       axisY: {
         title: "Voltage",
         tickLength: 0,
         gridThickness: 0.4,
         // valueFormatString: "#0,,.",
         // suffix: "*c",
         // stripLines: [{
         //   value: 783,
         //   label: "Average"
         // }]
       },
       data: [{
         yValueFormatString: "#### Units",
         xValueFormatString: "YYYY",
         type: "spline",
         dataPoints: [
           {x: new Date(Date.UTC (2020, 6, 1, 1,0) ), y: 626 },
           {x: new Date( Date.UTC (2020, 6, 1,2,0) ), y: 838  },
           {x: new Date( Date.UTC(2020, 6, 1,3,0) ), y: 743 },
           {x: new Date( Date.UTC(2020, 6, 1,4,0) ), y: 829},
           {x: new Date( Date.UTC(2020, 6, 1,5,0) ), y: 741},
           {x: new Date( Date.UTC(2020, 6, 1,6,0) ), y: 554},
           {x: new Date( Date.UTC(2020, 6, 1,7,0) ), y: 936},
           {x: new Date( Date.UTC(2020, 6, 1,8,0) ), y: 63},
           {x: new Date( Date.UTC(2020, 6, 1,9,0) ), y: 533},
           {x: new Date( Date.UTC(2020, 6, 1,10,0) ), y: 736},
           
   
         ]
       }]
       
     });
     chart4.render();
    

  }

}
