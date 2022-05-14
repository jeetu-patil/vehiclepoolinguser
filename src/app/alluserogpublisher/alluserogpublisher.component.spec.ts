import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserogpublisherComponent } from './alluserogpublisher.component';

describe('AlluserogpublisherComponent', () => {
  let component: AlluserogpublisherComponent;
  let fixture: ComponentFixture<AlluserogpublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlluserogpublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluserogpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
