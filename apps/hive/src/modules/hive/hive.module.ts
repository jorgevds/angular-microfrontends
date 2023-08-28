import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HiveFeatureModule } from "@store";
import { EmployeeService } from "common/services/employee.service";

import { ApplicationHeaderModule } from "../header/header.module";
import { SharedModule } from "../shared/shared.module";
import { HiveDetailComponent } from "./components/hive-detail/hive-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { HiveContainerComponent } from "./containers/hive-container/hive-container.component";

const routes: Routes = [
    {
        path: "",
        component: HiveContainerComponent,
        pathMatch: "full",
    },
    {
        path: "login",
        component: LoginComponent,
    },
];

@NgModule({
    declarations: [HiveContainerComponent, HiveDetailComponent, LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        ApplicationHeaderModule,
        HiveFeatureModule,
    ],
    providers: [EmployeeService],
})
export class HiveModule {}
