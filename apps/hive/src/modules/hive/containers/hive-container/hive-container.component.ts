import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadHiveFailure } from "@store";
import { Employee } from "common/entities/employee.entity";
import { EmployeeService } from "common/services/employee.service";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";

@Component({
    selector: "hive-app-container",
    templateUrl: "./hive-container.component.html",
    styleUrls: ["./hive-container.component.scss"],
})
export class HiveContainerComponent implements OnInit, OnDestroy {
    employees: Array<Employee> = [];

    destroy = new Subject<void>();

    constructor(
        private employeeService: EmployeeService,
        private router: Router,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.loadData();
        this.store.dispatch(loadHiveFailure({ error: "failed to load hive" }));
    }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    loadData(): void {
        this.employeeService
            .get()
            .pipe(take(1), takeUntil(this.destroy))
            .subscribe((employees) => {
                console.log(employees);
                this.setEmployees(employees);
            });
    }

    employeeOpen(): boolean {
        return this.employees.some((employee) => employee.dialogOpen);
    }

    navigateToAdmin(): void {
        this.router.navigate(["/overview"]);
    }

    private setEmployees(employees: Array<Employee>): void {
        this.employees = employees;
    }
}
