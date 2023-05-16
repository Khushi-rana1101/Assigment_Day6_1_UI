import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassexampleComponent } from './ngclassexample.component';

describe('NgclassexampleComponent', () => {
  let component: NgclassexampleComponent;
  let fixture: ComponentFixture<NgclassexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgclassexampleComponent]
    });
    fixture = TestBed.createComponent(NgclassexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
