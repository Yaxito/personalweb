import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrisergiComponent } from './trisergi.component';

describe('TrisergiComponent', () => {
  let component: TrisergiComponent;
  let fixture: ComponentFixture<TrisergiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrisergiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrisergiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
