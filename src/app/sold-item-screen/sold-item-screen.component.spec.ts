import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldItemScreenComponent } from './sold-item-screen.component';

describe('SoldItemScreenComponent', () => {
  let component: SoldItemScreenComponent;
  let fixture: ComponentFixture<SoldItemScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldItemScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldItemScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
