import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NxWelcomeComponent } from "./components/nx-welcome.component";

const routes: Routes = [
    {
        path: "",
        component: NxWelcomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRoutingModule {}
