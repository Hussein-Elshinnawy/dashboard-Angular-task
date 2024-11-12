import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowCardComponent } from './data-row-card.component';

describe('DataRowCardComponent', () => {
  let component: DataRowCardComponent;
  let fixture: ComponentFixture<DataRowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
