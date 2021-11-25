import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeonlineComponent } from './nodeonline.component';

describe('NodeonlineComponent', () => {
  let component: NodeonlineComponent;
  let fixture: ComponentFixture<NodeonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
