import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ApplicationComponent } from "./components/application/application.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    {
        path: "",
        component: ApplicationComponent,
        children: [
            { path: "", component: HomeComponent },
            {
                path: "apod",
                loadChildren: () =>
                    import("../../modules/apod/apod.module").then(
                        (m) => m.ApodModule
                    ),
            },
            {
                path: "neows",
                loadChildren: () =>
                    import("../../modules/neows/neows.module").then(
                        (m) => m.NeowsModule
                    ),
            },
        ],
    },
    { path: "**", component: ApplicationComponent, redirectTo: "" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
