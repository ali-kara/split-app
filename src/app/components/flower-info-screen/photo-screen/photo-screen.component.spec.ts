import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoScreenComponent } from './photo-screen.component';

describe('PhotoScreenComponent', () => {
  let component: PhotoScreenComponent;
  let fixture: ComponentFixture<PhotoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoScreenComponent]
    });
    fixture = TestBed.createComponent(PhotoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
