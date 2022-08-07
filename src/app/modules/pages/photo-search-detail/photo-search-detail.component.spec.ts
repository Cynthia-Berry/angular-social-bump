import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSearchDetailComponent } from './photo-search-detail.component';

describe('PhotoSearchDetailComponent', () => {
  let component: PhotoSearchDetailComponent;
  let fixture: ComponentFixture<PhotoSearchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSearchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
