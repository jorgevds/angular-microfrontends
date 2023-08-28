import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveContainerComponent } from './hive-container.component';

describe('HiveContainerComponent', () => {
  let component: HiveContainerComponent;
  let fixture: ComponentFixture<HiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
