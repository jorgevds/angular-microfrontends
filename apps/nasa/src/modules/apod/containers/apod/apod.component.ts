import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { APOD } from "@common/types/interface";
import { Store } from "@ngrx/store";
import { getAllApods, initApods, updateApods } from "@store";
import { map, Observable, Subject, takeUntil } from "rxjs";

@Component({
    selector: "nasa-apod-overview",
    templateUrl: "./apod.component.html",
    styleUrls: ["./apod.component.css"],
})
export class APODComponent implements OnInit, OnDestroy {
    private today: string = new Date().toJSON().slice(0, 10);
    private lastWeek: string = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
        .toJSON()
        .slice(0, 10);

    public apods$?: Observable<APOD[]>;
    public datesForm!: FormGroup;

    private destroy$: Subject<void> = new Subject<void>();

    constructor(private formBuilder: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeFormValues();
        this.initializeAPODStream();
        this.initializeFormValuesListener();
    }

    private initializeFormValues(): void {
        this.datesForm = this.formBuilder.group({
            formFields: this.formBuilder.group({
                start_date: [this.lastWeek],
                end_date: [this.today],
            }),
        });
    }

    private initializeAPODStream(): void {
        this.apods$ = this.store.select(getAllApods);
        console.log(this.datesForm.value);
        this.store.dispatch(
            initApods({
                start_date: this.datesForm.value.formFields.start_date,
                end_date: this.datesForm.value.formFields.end_date,
            })
        );
    }

    private initializeFormValuesListener(): void {
        this.datesForm?.valueChanges
            .pipe(
                map((form) =>
                    this.store.dispatch(
                        updateApods({
                            start_date: form.formFields.start_date,
                            end_date: form.formFields.end_date,
                        })
                    )
                ),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
