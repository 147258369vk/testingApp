import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAddExpComponent } from './developer-add-exp.component';

describe('DeveloperAddExpComponent', () => {
  let component: DeveloperAddExpComponent;
  let fixture: ComponentFixture<DeveloperAddExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperAddExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperAddExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
