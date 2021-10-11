import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service'
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

api_data_1:any;
api_data_2:any;
dataSource: MatTableDataSource<any>;
selectedValue ="micro"
filter:any = ["micro","nano","regional","brewpub","large","planning","bar","contract","proprietor","closed"]
  constructor( private route: ActivatedRoute,private router: Router,private dataservice:EmployeeService) {
this.initilize();
  }
  async loadsub(type){
  let api_link_2="https://api.openbrewerydb.org/breweries?by_type="+type;
await this.dataservice.get(api_link_2).then((result) => {
    this.api_data_2 = result;
  });

  }
async initilize(){
  let api_link_1="https://api.openbrewerydb.org/breweries";
        await this.dataservice.get(api_link_1).then((result) => {
    this.api_data_1 = result;
  });
await this.loadsub("micro")

        console.log(this.api_data_1);

// var tempheader = [];
//             tempheader = this.heading;




//             var headerarray=[];
//             for(let j=0;j<tempheader.length;j++){
//               var headerobj:any={};
//               var temp = document.createElement("div");
//               temp.innerHTML = tempheader[j];
//               // return temp.textContent || temp.innerText || "";

//               headerobj.name = temp.textContent;
//               headerobj.prop = heading1[j];
//               //headerobj.resizeable= false;
//               headerarray.push(headerobj);
//             }
//             this.columnss = headerarray;
//             this.displayedColumns =heading1;
//             var temparray = [];
//             for(let j=0;j<data.length;j++){
//               var tempobj:any={};
//               for(let i=0;i<this.columnss.length;i++){
//                 tempobj[this.columnss[i].prop] = data[j][i];
//               }
//               temparray.push(tempobj);
//             }
//             let rowss = temparray;
//       var temparray_to_datasource = rowss;
//       this.dataSource = new MatTableDataSource(temparray_to_datasource);


}


async onChange(deviceValue) {
    console.log(deviceValue.value);
    await this.loadsub(deviceValue.value);
}
  ngOnInit() {
  }
 
 
}

