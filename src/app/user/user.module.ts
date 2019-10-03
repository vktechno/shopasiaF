import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home',component:  HomescreenComponent},
  
];


@NgModule({
  declarations: [HomescreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
