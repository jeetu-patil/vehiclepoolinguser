import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidedetailinfoComponent } from './ridedetailinfo.component';

describe('RidedetailinfoComponent', () => {
  let component: RidedetailinfoComponent;
  let fixture: ComponentFixture<RidedetailinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidedetailinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidedetailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
