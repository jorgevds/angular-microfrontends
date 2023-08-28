import { TestBed } from '@angular/core/testing';
import { ApplicationComponent } from './application.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ApplicationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NASA Angular project'`, () => {
    const fixture = TestBed.createComponent(ApplicationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NASA Angular project');
  });
});
