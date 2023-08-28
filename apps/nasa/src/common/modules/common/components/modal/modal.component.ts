import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
    @ViewChild("modalComponent", { static: false })
    modal!: ElementRef;

    @Input()
    img?: string;

    public modalOpen: boolean = false;

    public toggle(): void {
        this.modalOpen = !this.modalOpen;
    }
}
