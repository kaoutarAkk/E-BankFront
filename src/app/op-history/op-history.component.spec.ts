import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpHistoryComponent } from './op-history.component';

describe('OpHistoryComponent', () => {
  let component: OpHistoryComponent;
  let fixture: ComponentFixture<OpHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
