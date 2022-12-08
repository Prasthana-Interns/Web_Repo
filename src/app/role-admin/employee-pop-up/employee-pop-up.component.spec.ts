import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/role-admin/add-employee/add-employee.component.spec.ts
import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeComponent);
========
import { EmployeePopUpComponent } from './employee-pop-up.component';

describe('EmployeePopUpComponent', () => {
  let component: EmployeePopUpComponent;
  let fixture: ComponentFixture<EmployeePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePopUpComponent);
>>>>>>>> dev:src/app/role-admin/employee-pop-up/employee-pop-up.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
