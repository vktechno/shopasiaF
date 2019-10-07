import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
    { path: '',component:  AdminComponent,children:[
         {path:"dashboard",component:DashboardComponent},
         {path:"product",component:ProductComponent}
    ]},
  
];


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
