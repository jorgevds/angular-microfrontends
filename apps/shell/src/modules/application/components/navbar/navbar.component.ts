import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "shell-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
    public navbarToggled$: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);

    ngOnInit() {
        this.navbarToggled$
            .asObservable()
            .subscribe((toggled) => this.setToggledClasses(toggled));
    }

    private setToggledClasses(toggled: boolean): void {
        if (toggled) {
            document.getElementById("navbar")?.classList.add("toggled");
            setTimeout(() => {
                document.getElementById("toggle-btn")?.classList.add("toggled");
            }, 300);
        } else {
            document.getElementById("navbar")?.classList.remove("toggled");
            document.getElementById("toggle-btn")?.classList.remove("toggled");
        }
    }

    public toggleButton(): void {
        this.navbarToggled$.next(!this.navbarToggled$.value);
    }
}
