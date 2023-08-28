import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { distinctUntilChanged, Observable, of } from "rxjs";

import { ApplicationSandbox } from "../../sandbox/application-sandbox.service";

@Component({
    selector: "shell-application-component",
    templateUrl: "./application.component.html",
    styleUrls: ["./application.component.css"],
})
export class ApplicationComponent implements OnInit {
    isLoggedIn$!: Observable<boolean>;

    constructor(
        private sandbox: ApplicationSandbox,
        private router: Router,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.initLoggedInStream();
        this.initLoggedInListener();
    }

    private initLoggedInStream(): void {
        // this.isLoggedIn$ = this.sandbox.isLoggedInStream();
        this.isLoggedIn$ = of(true);
    }

    private initLoggedInListener(): void {
        this.isLoggedIn$
            .pipe(distinctUntilChanged())
            .subscribe(async (loggedIn) => {
                setTimeout(() => {
                    // loggedIn
                    //     ? this.router.navigateByUrl("")
                    //     : this.router.navigateByUrl("login");
                    if (!loggedIn) this.router.navigateByUrl("login");
                });
            });
    }
}
