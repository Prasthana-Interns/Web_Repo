import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
