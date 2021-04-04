import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomocerComponent } from './somocer.component';

describe('SomocerComponent', () => {
  let component: SomocerComponent;
  let fixture: ComponentFixture<SomocerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomocerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
