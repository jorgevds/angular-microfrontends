import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NEVER, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";

import type { Neo, DetailCometoid } from "../../types/interface";
@Injectable({
    providedIn: "root",
})
export class NeoService {
    private baseUrl: string = "https://api.nasa.gov/neo/rest/v1/";
    private urlParams = { api_key: environment.NASA_KEY };

    constructor(private http: HttpClient) {}

    getRangeOfNeows(start_date: string, end_date: string): Observable<Neo> {
        const params = { start_date, end_date, ...this.urlParams };

        return this.http.get<Neo>(this.baseUrl + "feed?", { params }).pipe(
            catchError((err) => {
                console.error(
                    "NeoService - something went wrong fetching range of neows",
                    err
                );
                return NEVER;
            })
        );
    }

    getCometoidDetail(id?: string): Observable<DetailCometoid> {
        return this.http
            .get<DetailCometoid>(this.baseUrl + "neo/" + id + "?", {
                params: this.urlParams,
            })
            .pipe(
                catchError((err) => {
                    console.error(
                        "NeoService - something went wrong fetching neows detail",
                        err
                    );
                    return NEVER;
                })
            );
    }
}
