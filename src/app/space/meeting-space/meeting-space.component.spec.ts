import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSpaceComponent } from './meeting-space.component';

describe('MeetingSpaceComponent', () => {
  let component: MeetingSpaceComponent;
  let fixture: ComponentFixture<MeetingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
