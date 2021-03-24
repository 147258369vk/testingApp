import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAddeduComponent } from './developer-addedu.component';

describe('DeveloperAddeduComponent', () => {
  let component: DeveloperAddeduComponent;
  let fixture: ComponentFixture<DeveloperAddeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperAddeduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperAddeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
