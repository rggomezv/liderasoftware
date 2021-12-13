import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTabNumComponent } from './modal-tab-num.component';

describe('ModalTabNumComponent', () => {
  let component: ModalTabNumComponent;
  let fixture: ComponentFixture<ModalTabNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTabNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTabNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
