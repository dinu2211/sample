import { Routes,RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';


const appRoutes: Routes =[
{ path:'',component:LoginpageComponent },
];

export const routing = RouterModule.forRoot(appRoutes);