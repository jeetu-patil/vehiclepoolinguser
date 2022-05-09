import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckandbookComponent } from './checkandbook.component';

describe('CheckandbookComponent', () => {
  let component: CheckandbookComponent;
  let fixture: ComponentFixture<CheckandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckandbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
