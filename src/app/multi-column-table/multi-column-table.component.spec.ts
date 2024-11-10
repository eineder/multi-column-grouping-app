import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnTableComponent } from './multi-column-table.component';

describe('MultiColumnTableComponent', () => {
  let component: MultiColumnTableComponent;
  let fixture: ComponentFixture<MultiColumnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiColumnTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiColumnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
