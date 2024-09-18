import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPieComponent } from './default-pie.component';

describe('DefaultPieComponent', () => {
  let component: DefaultPieComponent;
  let fixture: ComponentFixture<DefaultPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
