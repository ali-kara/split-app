import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerInfoScreenComponent } from './flower-info-screen.component';

describe('FlowerInfoScreenComponent', () => {
  let component: FlowerInfoScreenComponent;
  let fixture: ComponentFixture<FlowerInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerInfoScreenComponent]
    });
    fixture = TestBed.createComponent(FlowerInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
