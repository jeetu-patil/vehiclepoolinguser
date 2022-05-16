import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VihicleprofileComponent } from './vihicleprofile.component';

describe('VihicleprofileComponent', () => {
  let component: VihicleprofileComponent;
  let fixture: ComponentFixture<VihicleprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VihicleprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VihicleprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
