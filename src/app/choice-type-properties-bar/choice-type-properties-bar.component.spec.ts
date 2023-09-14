import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTypePropertiesBarComponent } from './choice-type-properties-bar.component';

describe('ChoiceTypePropertiesBarComponent', () => {
  let component: ChoiceTypePropertiesBarComponent;
  let fixture: ComponentFixture<ChoiceTypePropertiesBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceTypePropertiesBarComponent]
    });
    fixture = TestBed.createComponent(ChoiceTypePropertiesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
