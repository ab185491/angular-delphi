import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJsonComponent } from './add-json.component';

describe('AddJsonComponent', () => {
  let component: AddJsonComponent;
  let fixture: ComponentFixture<AddJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
