import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupParentComponent } from './popup-parent.component';

describe('PopupParentComponent', () => {
  let component: PopupParentComponent;
  let fixture: ComponentFixture<PopupParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
