import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAtestComponent } from './take-atest.component';

describe('TakeAtestComponent', () => {
  let component: TakeAtestComponent;
  let fixture: ComponentFixture<TakeAtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeAtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
