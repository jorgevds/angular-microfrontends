import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NxWelcomeComponent } from "./components/nx-welcome.component";
import { WelcomeRoutingModule } from "./welcome-routing.module";

@NgModule({
    declarations: [NxWelcomeComponent],
    imports: [CommonModule, WelcomeRoutingModule],
    providers: [],
})
export class WelcomeModule {}
