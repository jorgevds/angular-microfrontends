import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, map, startWith, switchMap } from "rxjs/operators";

import { Cometoid, Neo } from "../../../../common/types/interface";
import { NeowsSandbox } from "../../sandbox/neows-sandbox.service";

@Component({
    selector: "nasa-neows",
    templateUrl: "./neows.component.html",
    styleUrls: ["./neows.component.css"],
})
export class NeowsComponent implements OnInit {
    private today = new Date().toJSON().slice(0, 10);
    private lastWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
        .toJSON()
        .slice(0, 10);

    neows$?: Observable<Neo>;
    cometoid$?: Observable<Cometoid>;
    datesForm!: FormGroup;
    errorMessage?: Observable<string>;

    constructor(
        private NeowsSandbox: NeowsSandbox,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initializeFormValues();
        this.setupNeowStream();
        this.setupCometoidStream();
    }

    initializeFormValues(): void {
        this.datesForm = this.formBuilder.group({
            formFields: this.formBuilder.group({
                start_date: this.lastWeek,
                end_date: [this.today],
            }),
        });
    }

    setupNeowStream(): void {
        if (this.datesForm != null) {
            this.neows$ = this.datesForm.valueChanges.pipe(
                startWith(this.datesForm.value),
                debounceTime(1000),
                switchMap(
                    (value: {
                        formFields: { start_date: string; end_date: string };
                    }) =>
                        this.NeowsSandbox.getRangeOfNeows(
                            value.formFields.start_date,
                            value.formFields.end_date
                        )
                )
            );
        }
    }

    setupCometoidStream(): void {
        //     // shareReplay() ?
        if (this.neows$) {
            this.cometoid$ = this.neows$.pipe(
                map((value) => value.near_earth_objects)
            );
        }

        //     this.cometoid$ = of({
        //       '1996-08-15': [
        //         {
        //           links: {
        //             self: 'self',
        //           },
        //           id: '1',
        //           neo_reference_id: '1',
        //           name: 'Josh',
        //           nasa_jpl_url: 'url',
        //           absolute_magnitude_h: 1,
        //           estimated_diameter: {
        //             kilometers: {
        //               estimated_diameter_min: 1,
        //               estimated_diameter_max: 1,
        //             },
        //             meters: {
        //               estimated_diameter_min: 1,
        //               estimated_diameter_max: 1,
        //             },
        //             miles: {
        //               estimated_diameter_min: 1,
        //               estimated_diameter_max: 1,
        //             },
        //             feet: {
        //               estimated_diameter_min: 1,
        //               estimated_diameter_max: 1,
        //             },
        //           },
        //           is_potentially_hazardous_asteroid: false,
        //           close_approach_data: [
        //             {
        //               close_approach_date: 'date',
        //               close_approach_date_full: 'date',
        //               epoch_date_close_approach: 1,
        //               relative_velocity: {
        //                 kilometers_per_second: 'a lot',
        //                 kilometers_per_hour: 'a lot',
        //                 miles_per_hour: 'a lot',
        //               },
        //               miss_distance: {
        //                 astronomical: 'a lot',
        //                 lunar: 'a lot',
        //                 kilometers: 'a lot',
        //                 miles: 'a lot',
        //               },
        //               orbiting_body: 'Earth',
        //             },
        //           ],
        //           is_sentry_object: false,
        //         },
        //       ],
        //     });
    }
}
