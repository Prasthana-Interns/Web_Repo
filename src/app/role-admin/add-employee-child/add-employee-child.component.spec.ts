import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeChildComponent } from './add-employee-child.component';

describe('AddEmployeeChildComponent', () => {
  let component: AddEmployeeChildComponent;
  let fixture: ComponentFixture<AddEmployeeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
