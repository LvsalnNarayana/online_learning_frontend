import { Component } from '@angular/core';
import { ContinueCourseComponent } from '../../shared/continue-course/continue-course.component.js';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-continue-learning-carousel',
  standalone: true,
  imports: [ContinueCourseComponent, SlickCarouselModule, MatIconModule],
  templateUrl: './continue-learning-carousel.component.html',
  styleUrl: './continue-learning-carousel.component.css',
})
export class ContinueLearningCarouselComponent {
  slideConfig = { slidesToShow: 3, slidesToScroll: 1 };
  slickInit(_e: any) {
    console.log('slick initialized');
  }

  breakpoint(_e: any) {
    console.log('breakpoint');
  }

  afterChange(_e: any) {
    console.log('afterChange');
  }

  beforeChange(_e: any) {
    console.log('beforeChange');
  }
}
