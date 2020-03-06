import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KentekenComponent } from './kenteken.component';

describe('KentekenComponent', () => {
  let component: KentekenComponent;
  let fixture: ComponentFixture<KentekenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KentekenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KentekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
