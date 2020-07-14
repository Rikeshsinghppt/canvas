import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:3000/users/register', body,{
      observe:'body'
    });
  }
}
