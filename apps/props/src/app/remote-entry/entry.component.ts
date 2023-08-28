import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "micro-frontends-props-entry",
    styleUrls: ["./remote-entry.component.css"],
    template: `<micro-frontends-nx-welcome></micro-frontends-nx-welcome>`,
    encapsulation: ViewEncapsulation.None,
})
export class RemoteEntryComponent {}
