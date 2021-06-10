import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineResourcesComponent } from './timeline-resources.component';

describe('TimelineResourcesComponent', () => {
  let component: TimelineResourcesComponent;
  let fixture: ComponentFixture<TimelineResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
