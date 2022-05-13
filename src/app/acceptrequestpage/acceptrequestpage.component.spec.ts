import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptrequestpageComponent } from './acceptrequestpage.component';

describe('AcceptrequestpageComponent', () => {
  let component: AcceptrequestpageComponent;
  let fixture: ComponentFixture<AcceptrequestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptrequestpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
