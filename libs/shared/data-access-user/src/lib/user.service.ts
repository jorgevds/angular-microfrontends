import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private isUserLoggedIn = new BehaviorSubject(false);
    isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

    public checkCredentials(username: string, password: string): void {
        if (username === "demo" && password === "demo") {
            this.isUserLoggedIn.next(true);
        }
    }

    public logout(): void {
        this.isUserLoggedIn.next(false);
    }
}
