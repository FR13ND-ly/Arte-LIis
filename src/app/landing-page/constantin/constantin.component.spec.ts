import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantinComponent } from './constantin.component';

describe('ConstantinComponent', () => {
  let component: ConstantinComponent;
  let fixture: ComponentFixture<ConstantinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
