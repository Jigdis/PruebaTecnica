/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditarDireccionesComponent } from './editarDirecciones.component';

describe('EditarDireccionesComponent', () => {
  let component: EditarDireccionesComponent;
  let fixture: ComponentFixture<EditarDireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
