import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-course-recommendation',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './course-recommendation.component.html',
  styleUrl: './course-recommendation.component.css',
  host: { class: 'w-full' },
})
export class CourseRecommendationComponent {}
