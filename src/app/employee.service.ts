import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   constructor(private http : HttpClient){}
 
  get(path) {          //http get path
    return new Promise(resolve => {
      this.http.get(path).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  }
