import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoresComponent } from './semaphores.component';

describe('SemaphoresComponent', () => {
  let component: SemaphoresComponent;
  let fixture: ComponentFixture<SemaphoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemaphoresComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaphoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
