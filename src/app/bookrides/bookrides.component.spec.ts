import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookridesComponent } from './bookrides.component';

describe('BookridesComponent', () => {
  let component: BookridesComponent;
  let fixture: ComponentFixture<BookridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookridesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
