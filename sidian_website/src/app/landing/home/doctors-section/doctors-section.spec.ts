import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSection } from './doctors-section';

describe('DoctorsSection', () => {
  let component: DoctorsSection;
  let fixture: ComponentFixture<DoctorsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
