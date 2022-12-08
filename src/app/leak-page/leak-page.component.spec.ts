import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakPageComponent } from './leak-page.component';

describe('LeakPageComponent', () => {
  let component: LeakPageComponent;
  let fixture: ComponentFixture<LeakPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeakPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
