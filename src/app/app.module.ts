import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
import {MatRadioModule} from '@angular/material'

import { EmployeeService } from './employee.service';
import { RecordsService } from './records.service';
import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { Observable } from 'rxjs';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {DataTableModule} from "angular-6-datatable";
import {  MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
    import { ToastrModule } from 'ng6-toastr-notifications';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatRadioModule,
    NgxPaginationModule,
    DataTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ToastrModule.forRoot()
    //HttpClient
    //Http
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [RecordsService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
