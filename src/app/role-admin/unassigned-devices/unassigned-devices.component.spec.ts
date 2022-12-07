import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedDevicesComponent } from './unassigned-devices.component';

describe('UnassignedDevicesComponent', () => {
  let component: UnassignedDevicesComponent;
  let fixture: ComponentFixture<UnassignedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
