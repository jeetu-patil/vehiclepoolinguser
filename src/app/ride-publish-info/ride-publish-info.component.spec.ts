import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidePublishInfoComponent } from './ride-publish-info.component';

describe('RidePublishInfoComponent', () => {
  let component: RidePublishInfoComponent;
  let fixture: ComponentFixture<RidePublishInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidePublishInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidePublishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
