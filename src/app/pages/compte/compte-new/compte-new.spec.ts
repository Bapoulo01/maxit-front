import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteNew } from './compte-new';

describe('CompteNew', () => {
  let component: CompteNew;
  let fixture: ComponentFixture<CompteNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
