import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueLearningCarouselComponent } from './continue-learning-carousel.component';

describe('ContinueLearningCarouselComponent', () => {
  let component: ContinueLearningCarouselComponent;
  let fixture: ComponentFixture<ContinueLearningCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueLearningCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinueLearningCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
