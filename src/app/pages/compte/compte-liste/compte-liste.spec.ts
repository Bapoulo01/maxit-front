import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteListe } from './compte-liste';

describe('CompteListe', () => {
  let component: CompteListe;
  let fixture: ComponentFixture<CompteListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
