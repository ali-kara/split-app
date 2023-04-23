import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInfoScreenComponent } from './sales-info-screen.component';

describe('SalesInfoScreenComponent', () => {
  let component: SalesInfoScreenComponent;
  let fixture: ComponentFixture<SalesInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesInfoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
