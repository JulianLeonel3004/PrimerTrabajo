import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclutadoresComponent } from './reclutadores.component';

describe('ReclutadoresComponent', () => {
  let component: ReclutadoresComponent;
  let fixture: ComponentFixture<ReclutadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclutadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
