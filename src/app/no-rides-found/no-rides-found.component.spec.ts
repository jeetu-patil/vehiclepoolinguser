import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRidesFoundComponent } from './no-rides-found.component';

describe('NoRidesFoundComponent', () => {
  let component: NoRidesFoundComponent;
  let fixture: ComponentFixture<NoRidesFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRidesFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRidesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
