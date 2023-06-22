import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInternetScreenComponent } from './no-internet-screen.component';

describe('NoInternetScreenComponent', () => {
  let component: NoInternetScreenComponent;
  let fixture: ComponentFixture<NoInternetScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoInternetScreenComponent]
    });
    fixture = TestBed.createComponent(NoInternetScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
