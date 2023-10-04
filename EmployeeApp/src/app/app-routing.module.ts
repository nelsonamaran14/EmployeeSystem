import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee-form/employee-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'welcome/:id', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginFormComponent},
  {
    path: 'welcome',
    canActivate: [AuthGuard],
    children: [
      {  path: '', redirectTo: 'login', pathMatch: 'full'  },
      {  path: 'login', component: LoginFormComponent  },
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


