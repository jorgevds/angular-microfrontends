import { NgModule } from "@angular/core";

import { ApplicationHeaderModule } from "../header/header.module";
import { ApplicationRoutingModule } from "./application-routing.module";
import { AppComponent } from "./components/application.component";

@NgModule({
    declarations: [AppComponent],
    imports: [ApplicationRoutingModule, ApplicationHeaderModule],
    bootstrap: [AppComponent],
})
export class ApplicationModule {}
