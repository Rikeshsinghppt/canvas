import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolarDataComponent } from './solar-data/solar-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { MatCardModule} from '@angular/material/card';
import { TemperatureComponent } from './cards/temperature/temperature.component';
import { BatteryComponent } from './cards/battery/battery.component';
import { HumidityComponent } from './cards/humidity/humidity.component';
import { SolarComponent } from './cards/solar/solar.component';

import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { Solar2Component } from './cards/solar2/solar2.component';
import { Solar3Component } from './cards/solar3/solar3.component';
import { Solar4Component } from './cards/solar4/solar4.component';
import { SolarvolageComponent } from './cards/solarvolage/solarvolage.component'
import { MatRippleModule } from '@angular/material/core';
import { DashboardComponent } from './cards/dashboard/dashboard.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { AlertsComponent } from './cards/alerts/alerts.component';
import { ReportsComponent } from './cards/reports/reports.component';
import { ScRegistoryComponent } from './cards/sc-registory/sc-registory.component';
import { UserlogComponent } from './login/app/userlog/userlog.component';
import { FpasswordComponent } from './login/app/fpassword/fpassword.component';
import { RegisterComponent } from './login/app/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { baseURL } from 'src/app/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    SolarDataComponent,
    TemperatureComponent,
    BatteryComponent,
    HumidityComponent,
    SolarComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    Solar2Component,
    Solar3Component,
    Solar4Component,
    SolarvolageComponent,
    DashboardComponent,
    AlertsComponent,
    ReportsComponent,
    ScRegistoryComponent,
    UserlogComponent,
    FpasswordComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule, 
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [ {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
