import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDeLaPaginaComponent } from './cuerpo-de-la-pagina.component';

describe('CuerpoDeLaPaginaComponent', () => {
  let component: CuerpoDeLaPaginaComponent;
  let fixture: ComponentFixture<CuerpoDeLaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuerpoDeLaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoDeLaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
