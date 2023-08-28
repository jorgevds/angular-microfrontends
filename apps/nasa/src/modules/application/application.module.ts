import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { NavbarComponent } from "../../common/components/navbar/navbar.component";
import { FormModule } from "../../common/modules/form/form.module";
import { PortalNavComponent } from "../../modules/application/containers/portal-nav/portal-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { ApplicationComponent } from "./components/application/application.component";
import { HomeComponent } from "./components/home/home.component";
import { ApplicationSandbox } from "./sandbox/application-sandbox.service";
import { ApplicationService } from "./services/application.service";

@NgModule({
    declarations: [
        ApplicationComponent,
        HomeComponent,
        NavbarComponent,
        PortalNavComponent,
    ],
    providers: [ApplicationSandbox, ApplicationService],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormModule,
        NgxSkeletonLoaderModule,
    ],
    exports: [ApplicationComponent, NavbarComponent],
    bootstrap: [ApplicationComponent],
})
export class ApplicationModule {}
