import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isBefore } from "date-fns";
import parseISO from "date-fns/parseISO";

@Injectable({
    providedIn: "root",
})
export class FormService {
    public today = new Date().toJSON().slice(0, 10);
    private lastWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
        .toJSON()
        .slice(0, 10);
    constructor() {}

    private maximumDateAllowed(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let dateToControl = control.value;

            return isBefore(parseISO(this.today), dateToControl) // ?????
                ? null
                : {
                      end_date: {
                          "date-maximum": this.today,
                          actuel: control?.value,
                      },
                  };
        };
    }
}
