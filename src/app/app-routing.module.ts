import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HumidityComponent } from './cards/humidity/humidity.component';
import { BatteryComponent } from './cards/battery/battery.component';
import { SolarComponent } from './cards/solar/solar.component';
import { TemperatureComponent } from './cards/temperature/temperature.component';
import { Solar2Component } from './cards/solar2/solar2.component';
import { Solar3Component } from './cards/solar3/solar3.component';
import { Solar4Component } from './cards/solar4/solar4.component';
import { SolarvolageComponent } from './cards/solarvolage/solarvolage.component';
import { DashboardComponent } from './cards/dashboard/dashboard.component';
import { AlertsComponent } from './cards/alerts/alerts.component';
import { ReportsComponent } from './cards/reports/reports.component';
import { ScRegistoryComponent } from './cards/sc-registory/sc-registory.component';
import { UserlogComponent } from './login/app/userlog/userlog.component';
import { FpasswordComponent } from './login/app/fpassword/fpassword.component';
import { RegisterComponent } from './login/app/register/register.component';


const routes: Routes = [{path:'Userlog',component:UserlogComponent},
{path: 'register', component:RegisterComponent},
{path: 'fpassword', component:FpasswordComponent},


{path:'',component:MainComponent,

 children:[
   {path:'',component:DashboardComponent},

     {path:'',component:DashboardComponent},
     {path:'Humidity',component:HumidityComponent},
     {path:'Battery',component:BatteryComponent},
    //  {path:'Solar1',component:SolarComponent},
     {path: 'solar/:_id', component: SolarComponent},
     {path:'Solar2',component:Solar2Component},
     {path:'Solar3',component:Solar3Component},
     {path:'Solar4',component:Solar4Component},
     {path: 'Alerts', component:AlertsComponent},
     {path:'Reports',component:ReportsComponent},
     {path:'ScRegistory',component:ScRegistoryComponent},
     {path:'solarVolatge',component:SolarvolageComponent},
     {path:'Temperature',component:TemperatureComponent}
   ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
