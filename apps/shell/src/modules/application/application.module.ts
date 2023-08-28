import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ApplicationRoutingModule } from "./application-routing.module";
import { ApplicationComponent } from "./containers/application/application.component";
import { ApplicationSandbox } from "./sandbox/application-sandbox.service";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [ApplicationComponent, NavbarComponent],
    imports: [ApplicationRoutingModule, CommonModule, HttpClientModule],
    providers: [ApplicationSandbox],
    bootstrap: [ApplicationComponent],
})
export class ApplicationModule {}
