import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "common/entities/employee.entity";
import { EmployeeService } from "common/services/employee.service";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";

@Component({
    selector: "hive-admin-container",
    templateUrl: "./admin-container.component.html",
    styleUrls: ["./admin-container.component.scss"],
})
export class AdminContainerComponent implements OnInit, OnDestroy {
    constructor(
        private employeeService: EmployeeService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    employees: Array<Employee> = [];

    employeeDialogOpen = false;
    selectedEmployee: Employee | null = null;

    destroy$ = new Subject<void>();

    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadData(): void {
        this.employeeService
            .get()
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe((employees) => this.setEmployees(employees));
    }

    private setEmployees(employees: Array<Employee>) {
        this.employees = employees;
    }

    openEditEmployeeForm(employee: Employee): void {
        this.selectedEmployee = employee;
        this.openDialog();
    }

    openCreateEmployeeForm(): void {
        this.selectedEmployee = null;
        this.openDialog();
    }

    onCreateEmployee(employee: Employee) {
        this.employeeService
            .create(employee)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(() => this.closeDialog());
    }

    onEditEmployee(employee: Employee) {
        this.employeeService
            .edit(employee)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(() => this.closeDialog());
    }

    openDialog(): void {
        this.employeeDialogOpen = true;
    }

    closeDialog(): void {
        this.employeeDialogOpen = false;
    }

    navigateBack(): void {
        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }
}
