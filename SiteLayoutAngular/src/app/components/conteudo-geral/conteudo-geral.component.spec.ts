import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoGeralComponent } from './conteudo-geral.component';

describe('ConteudoGeralComponent', () => {
  let component: ConteudoGeralComponent;
  let fixture: ComponentFixture<ConteudoGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
