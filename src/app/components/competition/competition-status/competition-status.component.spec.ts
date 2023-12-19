import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionStatusComponent } from './competition-status.component';

describe('CompetitionStatusComponent', () => {
  let component: CompetitionStatusComponent;
  let fixture: ComponentFixture<CompetitionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionStatusComponent]
    });
    fixture = TestBed.createComponent(CompetitionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
