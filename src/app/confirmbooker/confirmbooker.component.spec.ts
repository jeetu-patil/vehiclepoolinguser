import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmbookerComponent } from './confirmbooker.component';

describe('ConfirmbookerComponent', () => {
  let component: ConfirmbookerComponent;
  let fixture: ComponentFixture<ConfirmbookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmbookerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmbookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
