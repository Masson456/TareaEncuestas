import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuestas2Component } from './encuestas2.component';

describe('Encuestas2Component', () => {
  let component: Encuestas2Component;
  let fixture: ComponentFixture<Encuestas2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Encuestas2Component]
    });
    fixture = TestBed.createComponent(Encuestas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
