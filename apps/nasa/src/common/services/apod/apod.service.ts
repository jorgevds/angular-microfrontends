import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { APOD } from "@shared";
import { NEVER, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class APODService {
    private baseUrl: string = "https://api.nasa.gov/planetary/apod?";
    private params = { api_key: environment.NASA_KEY };

    constructor(private http: HttpClient) {}

    public getAPOD(date: string): Observable<APOD> {
        const params = {
            ...this.params,
            date,
        };

        return this.http.get<APOD>(this.baseUrl, { params }).pipe(
            catchError((e) => {
                console.error("APODService - error while fetching apod", e);
                return NEVER;
            })
        );
    }

    public getRangeOfAPOD(
        start_date: string,
        end_date: string
    ): Observable<APOD[]> {
        const params = {
            ...this.params,
            start_date,
            end_date,
        };

        return this.http.get<APOD[]>(this.baseUrl, { params }).pipe(
            catchError((e) => {
                console.error(
                    "APODService - error while fetching range of apod",
                    e
                );
                return NEVER;
            })
        );
    }
}
