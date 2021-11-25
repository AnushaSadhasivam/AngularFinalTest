import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularonlineComponent } from './angularonline.component';

describe('AngularonlineComponent', () => {
  let component: AngularonlineComponent;
  let fixture: ComponentFixture<AngularonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
