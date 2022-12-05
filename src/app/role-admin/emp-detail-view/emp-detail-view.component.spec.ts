import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailViewComponent } from './emp-detail-view.component';

describe('EmpDetailViewComponent', () => {
  let component: EmpDetailViewComponent;
  let fixture: ComponentFixture<EmpDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
