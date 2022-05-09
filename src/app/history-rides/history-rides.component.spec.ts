import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRidesComponent } from './history-rides.component';

describe('HistoryRidesComponent', () => {
  let component: HistoryRidesComponent;
  let fixture: ComponentFixture<HistoryRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
