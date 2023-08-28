import { Component, Input } from "@angular/core";
import { Employee } from "common/entities/employee.entity";

@Component({
    selector: "[app-hive-detail]",
    templateUrl: "./hive-detail.component.html",
    styleUrls: ["./hive-detail.component.scss"],
})
export class HiveDetailComponent {
    @Input() employee!: Employee;

    constructor() {}

    toggleDialog(): void {
        this.employee.dialogOpen = !this.employee.dialogOpen;
    }

    closeDialog(): void {
        this.employee.dialogOpen = false;
    }
}
