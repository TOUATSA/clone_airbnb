import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfPicturePropertiesComponent } from './card-of-picture-properties.component';

describe('CardOfPicturePropertiesComponent', () => {
  let component: CardOfPicturePropertiesComponent;
  let fixture: ComponentFixture<CardOfPicturePropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfPicturePropertiesComponent]
    });
    fixture = TestBed.createComponent(CardOfPicturePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
