import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherdetailComponent } from './publisherdetail.component';

describe('PublisherdetailComponent', () => {
  let component: PublisherdetailComponent;
  let fixture: ComponentFixture<PublisherdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
