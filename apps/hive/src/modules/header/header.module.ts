import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderTitleComponent } from "./components/header-title/header-title.component";
import { UserDropdownComponent } from "./components/user-dropdown/user-dropdown.component";
import { ApplicationHeader } from "./containers/application-header.container.component";

@NgModule({
    declarations: [
        ApplicationHeader,
        HeaderTitleComponent,
        UserDropdownComponent,
    ],
    exports: [ApplicationHeader],
    imports: [CommonModule, RouterModule],
})
export class ApplicationHeaderModule {}
