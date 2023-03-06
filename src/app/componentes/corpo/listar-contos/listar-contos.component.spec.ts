import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContosComponent } from './listar-contos.component';

describe('ListarContosComponent', () => {
  let component: ListarContosComponent;
  let fixture: ComponentFixture<ListarContosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarContosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarContosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
