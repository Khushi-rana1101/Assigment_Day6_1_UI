import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSheetComponent } from './style-sheet.component';

describe('StyleSheetComponent', () => {
  let component: StyleSheetComponent;
  let fixture: ComponentFixture<StyleSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleSheetComponent]
    });
    fixture = TestBed.createComponent(StyleSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
