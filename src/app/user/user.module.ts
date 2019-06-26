import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
//import components
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'**',
        redirectTo:'/login'
      },
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      }
    ])
  ]
})
export class UserModule { }
