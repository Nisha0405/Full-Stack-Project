import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFlowComponent } from './manager-flow.component';

describe('ManagerFlowComponent', () => {
  let component: ManagerFlowComponent;
  let fixture: ComponentFixture<ManagerFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
