import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Router } from "@angular/router";
import { add, compareAsc, differenceInDays, parseISO } from "date-fns";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { FormService } from "../../../../services/form/form.service";
import { FormSandbox } from "../../sandbox/form-sandbox.service";

@Component({
    selector: "app-date-form",
    templateUrl: "./date-form.component.html",
    styleUrls: ["./date-form.component.css"],
})
export class DateFormComponent implements OnInit {
    @Input() formGroupName?: string;
    public form!: FormGroup;

    constructor(
        private rootFormGroup: FormGroupDirective,
        public FormService: FormService,
        private FormSandbox: FormSandbox,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.initializeFormValues();
        this.checkRouteForNeows();
    }

    initializeFormValues(): void {
        if (this.formGroupName) {
            this.form = this.FormSandbox.initializeFormValues(
                this.rootFormGroup,
                this.formGroupName
            );
        }
    }

    private checkRouteForNeows(): void {
        if (this.route.url === "/neows") {
            this.adjustEndDateByWeek();
        }
    }

    private adjustEndDateByWeek(): void {
        console.log(this.form);
        let end_date = this.form.get("end_date");
        let start_date = this.form.get("start_date");

        this.form.valueChanges
            .pipe(this.isStartDateBeforeEndDate(), this.validateIsWeekSpan())
            .subscribe(() => {
                end_date?.patchValue(
                    add(new Date(start_date?.value), { days: 6 })
                        .toJSON()
                        .slice(0, 10),
                    { emitEvent: false }
                );
            });
    }

    private isStartDateBeforeEndDate(): (
        source: Observable<any>
    ) => Observable<{ earlier: string; later: string }> {
        return (source: Observable<any>) =>
            source.pipe(
                map((formValue: { start_date: string; end_date: string }) =>
                    compareAsc(
                        parseISO(formValue.start_date),
                        parseISO(formValue.end_date)
                    ) === -1
                        ? {
                              earlier: formValue.start_date,
                              later: formValue.end_date,
                          }
                        : {
                              earlier: formValue.end_date,
                              later: formValue.start_date,
                          }
                )
            );
    }

    //   private validateIsWeekSpan(): (source: Observable<any>) => Observable<any> {
    //     return (source: Observable<any>) =>
    //       source.pipe(
    //         this.checkDifferenceBetweenDays(),
    //         map((testResult: string) => {
    //           if (testResult.includes(this.form.get('start_date')!.value)) {
    //             return this.form.get('end_date')!.value;
    //           } else if (testResult.includes(this.form.get('end_date')!.value)) {
    //             return this.form.get('start_date')!.value;
    //           }
    //         })
    //       );
    //   }

    private validateIsWeekSpan(): (source: Observable<any>) => Observable<any> {
        return (source: Observable<any>) =>
            source.pipe(
                map((formValue: { earlier: string; later: string }) => {
                    if (
                        formValue.earlier === this.form.get("start_date")!.value
                    ) {
                        if (
                            differenceInDays(
                                parseISO(formValue.earlier),
                                parseISO(formValue.later)
                            ) <= -6
                        ) {
                            return this.form.get("start_date")!.value;
                        }
                    } else {
                        if (
                            differenceInDays(
                                parseISO(formValue.earlier),
                                parseISO(formValue.later)
                            ) <= 6
                        ) {
                            return this.form.get("end_date")!.value;
                        }
                    }
                }),
                filter((value: any) => value != null)
            );
    }
}
