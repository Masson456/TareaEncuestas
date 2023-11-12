import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuestas3Component } from './encuestas3.component';

describe('Encuestas3Component', () => {
  let component: Encuestas3Component;
  let fixture: ComponentFixture<Encuestas3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Encuestas3Component]
    });
    fixture = TestBed.createComponent(Encuestas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
