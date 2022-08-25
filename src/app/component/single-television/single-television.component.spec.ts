import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTelevisionComponent } from './single-television.component';

describe('SingleTelevisionComponent', () => {
  let component: SingleTelevisionComponent;
  let fixture: ComponentFixture<SingleTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTelevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
