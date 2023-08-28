import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("@hive/hive.module").then((m) => m.HiveModule),
    },
    {
        path: "overview",
        loadChildren: () =>
            import("@admin/admin.module").then((m) => m.AdminModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationRoutingModule {}
