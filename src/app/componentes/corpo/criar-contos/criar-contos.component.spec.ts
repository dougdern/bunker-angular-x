import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContosComponent } from './criar-contos.component';

describe('CriarContosComponent', () => {
  let component: CriarContosComponent;
  let fixture: ComponentFixture<CriarContosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarContosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarContosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
