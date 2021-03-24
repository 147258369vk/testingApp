import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCreateProfileComponent } from './developer-create-profile.component';

describe('DeveloperCreateProfileComponent', () => {
  let component: DeveloperCreateProfileComponent;
  let fixture: ComponentFixture<DeveloperCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperCreateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
