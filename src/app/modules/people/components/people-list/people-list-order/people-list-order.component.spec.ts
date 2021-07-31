import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListOrderComponent } from './people-list-order.component';

describe('PeopleListOrderComponent', () => {
  let component: PeopleListOrderComponent;
  let fixture: ComponentFixture<PeopleListOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleListOrderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
