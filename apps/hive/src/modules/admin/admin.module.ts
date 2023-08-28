import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AdminContainerComponent } from './containers/admin-container/admin-container.component';
import { EmployeeService } from 'common/services/employee.service';
import { ApplicationHeaderModule } from 'modules/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AdminContainerComponent, EmployeeFormComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule.forChild(routes), ApplicationHeaderModule],
  providers: [EmployeeService]
})
export class AdminModule {}
