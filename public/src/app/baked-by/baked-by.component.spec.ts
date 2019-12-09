import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedbyComponent } from './baked-by.component';

describe('BakedbyComponent', () => {
  let component: BakedbyComponent;
  let fixture: ComponentFixture<BakedbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakedbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
