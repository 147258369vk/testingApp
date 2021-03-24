import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperEditProfileComponent } from './developer-edit-profile.component';

describe('DeveloperEditProfileComponent', () => {
  let component: DeveloperEditProfileComponent;
  let fixture: ComponentFixture<DeveloperEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
