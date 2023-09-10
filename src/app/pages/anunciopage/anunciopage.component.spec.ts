import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciopageComponent } from './anunciopage.component';

describe('AnunciopageComponent', () => {
  let component: AnunciopageComponent;
  let fixture: ComponentFixture<AnunciopageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnunciopageComponent]
    });
    fixture = TestBed.createComponent(AnunciopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
