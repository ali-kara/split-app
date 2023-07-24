import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoScreenComponent } from './item-info-screen.component';

describe('ItemInfoScreenComponent', () => {
  let component: ItemInfoScreenComponent;
  let fixture: ComponentFixture<ItemInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoScreenComponent]
    });
    fixture = TestBed.createComponent(ItemInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
