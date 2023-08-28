import { Injectable } from "@angular/core";
import { UserService } from "@micro-frontends/shared/data-access-user";
import { Observable } from "rxjs";

@Injectable()
export class ApplicationSandbox {
    constructor(private userService: UserService) {}

    public isLoggedInStream(): Observable<boolean> {
        return this.userService.isUserLoggedIn$;
    }
}
