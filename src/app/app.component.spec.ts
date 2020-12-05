import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create new empty expression array', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const { expression } = app;
    expect(expression.length).toBe(0);
  });

  it('by appending "0" to empty expression nothing should change', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const { expression } = app;
    expression.append('0');
    expect(expression.length).toBe(0);
  });
});
