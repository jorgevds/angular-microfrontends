import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "@common/entities/employee.entity";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class EmployeeService {
    private ENDPOINT =
        "https://sweet-hive-backend.herokuapp.com/api/employbees";

    constructor(private httpClient: HttpClient) {}

    get(): Observable<Array<Employee>> {
        const employbees = [
            {
                name: "Jos De Berdt",
                id: "1",
                jobTitle: "Badjasdrager",
                email: "jos.deberdt@octoo.be",
                picture:
                    "https://www.josdeberdt.be/assets/imgs/jos-de-berdt.jpg",
                phone: "+32 474 70 18 40",
            },
        ];

        return of(employbees);
        // return this.httpClient.get<Array<Employee>>(this.ENDPOINT);
    }

    getById(id: string): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.ENDPOINT}/${id}`);
    }

    create(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.ENDPOINT, employee);
    }

    edit(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(
            `${this.ENDPOINT}/${employee.id}`,
            employee
        );
    }
}
