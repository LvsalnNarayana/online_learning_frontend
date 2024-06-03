import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContinueLearningCarouselComponent } from '../../shared/continue-learning-carousel/continue-learning-carousel.component.js';
import { CourseCarouselComponent } from '../../shared/course-carousel/course-carousel.component.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    ContinueLearningCarouselComponent,
    CourseCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
