import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDeLaPaginaComponent } from './pie-de-la-pagina.component';

describe('PieDeLaPaginaComponent', () => {
  let component: PieDeLaPaginaComponent;
  let fixture: ComponentFixture<PieDeLaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieDeLaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDeLaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
