import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishhistoryComponent } from './publishhistory.component';

describe('PublishhistoryComponent', () => {
  let component: PublishhistoryComponent;
  let fixture: ComponentFixture<PublishhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
