import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFavoriteComponent } from './people-favorite.component';

describe('PeopleFavoriteComponent', () => {
  let component: PeopleFavoriteComponent;
  let fixture: ComponentFixture<PeopleFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleFavoriteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
