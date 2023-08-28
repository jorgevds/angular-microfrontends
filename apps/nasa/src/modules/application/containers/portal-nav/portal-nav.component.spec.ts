import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationSandbox } from '../../sandbox/application-sandbox.service';

import { PortalNavComponent } from './portal-nav.component';

describe('PortalNavComponent', () => {
  let component: PortalNavComponent;
  let fixture: ComponentFixture<PortalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalNavComponent],
      providers: [ApplicationSandbox],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
});
