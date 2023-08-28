import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ApplicationComponent } from "./application.component";

describe("ApplicationComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [ApplicationComponent],
        }).compileComponents();
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(ApplicationComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
