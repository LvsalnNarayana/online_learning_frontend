import { NgClass, NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CourseRecommendationComponent } from '../../shared/course-recommendation/course-recommendation.component.js';
import { MatDividerModule } from '@angular/material/divider';
import { ReviewComponent } from '../../shared/review/review.component.js';
import { InstructorCardComponent } from '../../shared/instructor-card/instructor-card.component.js';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes.js';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    NgClass,
    MatExpansionModule,
    NgFor,
    SlicePipe,
    CourseRecommendationComponent,
    MatDividerModule,
    ReviewComponent,
    InstructorCardComponent,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  showMoreLearn: boolean = false;
  showMoreDescription: boolean = false;
  panelOpenState: boolean = false;
  sectionsToShow: number = 10;
  totalSections: number = 42;
  sectionsArray: number[];
  toggleShowMoreLearn() {
    this.showMoreLearn = !this.showMoreLearn;
  }
  toggleShowMoreDescription() {
    this.showMoreDescription = !this.showMoreDescription;
  }
  constructor() {
    this.sectionsArray = Array.from(
      { length: this.totalSections },
      (_, i) => i + 1
    );
  }
}
