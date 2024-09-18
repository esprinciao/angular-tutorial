import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellbeingAnalyzerComponent } from './wellbeing-analyzer.component';

describe('WellbeingAnalyzerComponent', () => {
  let component: WellbeingAnalyzerComponent;
  let fixture: ComponentFixture<WellbeingAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellbeingAnalyzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellbeingAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
