import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerContosComponent } from './ler-contos.component';

describe('LerContosComponent', () => {
  let component: LerContosComponent;
  let fixture: ComponentFixture<LerContosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerContosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerContosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
