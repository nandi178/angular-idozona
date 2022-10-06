import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdozonaComponent } from './idozona.component';

describe('IdozonaComponent', () => {
  let component: IdozonaComponent;
  let fixture: ComponentFixture<IdozonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdozonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdozonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
