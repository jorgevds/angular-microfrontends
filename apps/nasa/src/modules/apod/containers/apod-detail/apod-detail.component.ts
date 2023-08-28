import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ModalComponent } from "@common/modules/common/components/modal/modal.component";
import { APOD } from "@common/types/interface";
import { Store } from "@ngrx/store";
import { getAllApods } from "@store";
import { add, isTomorrow } from "date-fns";
import { Observable, of, Subject } from "rxjs";
import { map, switchMap, takeUntil } from "rxjs/operators";

import { ApodSandbox } from "../../sandbox/apod-sandbox.service";

@Component({
    selector: "nasa-apod-detail",
    templateUrl: "./apod-detail.component.html",
    styleUrls: ["./apod-detail.component.css"],
})
export class ApodDetailComponent implements OnInit, OnDestroy {
    public pod$?: Observable<APOD>;

    private currentDate$!: Observable<string>;
    public previousDate$!: Observable<string>;
    public nextDate$!: Observable<string>;

    public imageLoaded$: Subject<boolean> = new Subject<boolean>();
    public isTomorrow$!: Observable<boolean>;

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private ApodSandbox: ApodSandbox,
        private route: ActivatedRoute,
        private store: Store<APOD>
    ) {}

    ngOnInit(): void {
        this.setupDateStreams();
        this.getApod();
        this.initRouteListener();
        this.initIsTomorrowStream();
    }

    private setupDateStreams(): void {
        this.setupCurrentDateStream();
        this.setupPreviousDateStream();
        this.setupNextDateStream();
    }

    private setupCurrentDateStream(): void {
        this.currentDate$ = this.route.paramMap.pipe(
            map((params: ParamMap) => {
                const currentDate: string | null = params.get("id");
                return currentDate != null
                    ? currentDate
                    : new Date().toJSON().slice(0, 10);
            })
        );
    }
    // adding 1 day causes date-fns to skip the 31st day when subtracting
    // using hours seems to fix this issue
    private setupPreviousDateStream(): void {
        this.previousDate$ = this.currentDate$.pipe(
            map((value: string) => {
                return add(new Date(value), { hours: -24 })
                    .toJSON()
                    .slice(0, 10);
            })
        );
    }

    private setupNextDateStream(): void {
        this.nextDate$ = this.currentDate$.pipe(
            map((value: string) => {
                return add(new Date(value), { hours: 24 })
                    .toJSON()
                    .slice(0, 10);
            })
        );
    }

    private getApod(): void {
        this.pod$ = this.currentDate$.pipe(
            switchMap((value: string) => this.fetchStoreOrApi(value))
        );
    }

    private fetchStoreOrApi(value: string): Observable<APOD> {
        return this.store.select(getAllApods).pipe(
            map((apods) => apods.find((apod) => apod.date === value)),
            switchMap((apodFound) =>
                apodFound ? of(apodFound) : this.ApodSandbox.getApod(value)
            )
        );
    }

    @ViewChild("modal", { static: false })
    modal!: ModalComponent;

    openModal(): void {
        this.modal.toggle();
    }

    private initRouteListener(): void {
        this.route.params
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.imageLoaded$.next(false));
    }

    private initIsTomorrowStream(): void {
        this.isTomorrow$ = this.nextDate$.pipe(
            map((nextDate) => isTomorrow(new Date(nextDate)))
        );
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public imageLoaded(event: any): void {
        this.imageLoaded$.next(true);
    }
}
