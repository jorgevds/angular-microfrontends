import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodDetailComponent } from './apod-detail.component';

describe('ApodDetailComponent', () => {
  let component: ApodDetailComponent;
  let fixture: ComponentFixture<ApodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApodDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
});
