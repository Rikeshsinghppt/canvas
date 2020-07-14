import { Injectable } from '@angular/core';
import {Device} from 'src/app/device';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {baseURL} from 'src/app/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(baseURL+'devices');
  }
  // fetchDevice(id:string):Observable<Device[]>{
  //   return this.http.get<Device[]>(baseURL+'devices/'+id);
  // }
  fetchDevice(_id:string){
    return this.http.get(
      'https://alenthankz-iot-api.herokuapp.com/devices/'+_id
   
    )
  }
}
