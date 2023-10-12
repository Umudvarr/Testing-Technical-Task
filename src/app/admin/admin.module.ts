import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [UsersComponent, ProductsComponent, SettingsComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
