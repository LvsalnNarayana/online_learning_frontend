import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueCourseComponent } from './continue-course.component';

describe('ContinueCourseComponent', () => {
  let component: ContinueCourseComponent;
  let fixture: ComponentFixture<ContinueCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinueCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
