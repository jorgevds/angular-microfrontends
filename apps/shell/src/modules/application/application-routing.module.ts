import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from "@nrwl/angular/mf";

import { ApplicationComponent } from "./containers/application/application.component";

const routes: Routes = [
    {
        path: "",
        component: ApplicationComponent,
        children: [
            {
                path: "welcome",
                loadChildren: () =>
                    import("../welcome/welcome.module").then(
                        (m) => m.WelcomeModule
                    ),
            },
            {
                path: "login",
                loadChildren: () =>
                    loadRemoteModule("login", "./Module").then(
                        (m) => m.RemoteEntryModule
                    ),
            },
            {
                path: "nasa",
                loadChildren: () =>
                    loadRemoteModule("nasa", "./Module").then(
                        (m) => m.ApplicationModule
                    ),
            },
            {
                path: "hive",
                loadChildren: () =>
                    loadRemoteModule("hive", "./Module").then(
                        (m) => m.ApplicationModule
                    ),
            },
            {
                path: "props",
                loadChildren: () =>
                    loadRemoteModule("props", "./Module").then(
                        (m) => m.RemoteEntryModule
                    ),
            },
            {
                path: "",
                redirectTo: "welcome",
                pathMatch: "full",
            },
        ],
    },
    { path: "**", component: ApplicationComponent, redirectTo: "" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationRoutingModule {}
