import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowsSectionComponent } from './data-rows-section.component';

describe('DataRowsSectionComponent', () => {
  let component: DataRowsSectionComponent;
  let fixture: ComponentFixture<DataRowsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRowsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRowsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
