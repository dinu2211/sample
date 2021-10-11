import { Component } from '@angular/core';
import { RecordsService } from './records.service'
import { EmployeeService } from './employee.service'
//import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleLogin';

records={}

constructor(private myFirstService : RecordsService){

}

ngOnInit(){
}

}
