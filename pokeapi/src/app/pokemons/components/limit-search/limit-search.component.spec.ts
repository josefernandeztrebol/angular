import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSearchComponent } from './limit-search.component';

describe('LimitSearchComponent', () => {
  let component: LimitSearchComponent;
  let fixture: ComponentFixture<LimitSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitSearchComponent]
    });
    fixture = TestBed.createComponent(LimitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
