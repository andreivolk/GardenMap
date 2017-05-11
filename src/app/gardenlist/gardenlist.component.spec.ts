import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenlistComponent } from './gardenlist.component';

describe('GardenlistComponent', () => {
  let component: GardenlistComponent;
  let fixture: ComponentFixture<GardenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
