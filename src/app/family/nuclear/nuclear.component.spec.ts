import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearComponent } from './nuclear.component';

describe('NuclearComponent', () => {
  let component: NuclearComponent;
  let fixture: ComponentFixture<NuclearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuclearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
