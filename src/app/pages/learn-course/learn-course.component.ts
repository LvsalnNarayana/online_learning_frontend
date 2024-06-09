import { NgClass, NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { InstructorCardComponent } from '../../shared/instructor-card/instructor-card.component.js';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReviewComponent } from '../../shared/review/review.component.js';
import { AnnouncementComponent } from '../../shared/announcement/announcement.component.js';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-learn-course',
  standalone: true,
  imports: [
    MatIconModule,
    MatExpansionModule,
    NgFor,
    SlicePipe,
    NgClass,
    MatTabsModule,
    MatDividerModule,
    InstructorCardComponent,
    MatProgressBarModule,
    ReviewComponent,
    AnnouncementComponent,
    MatCheckboxModule,
  ],
  templateUrl: './learn-course.component.html',
  styleUrl: './learn-course.component.css',
})
export class LearnCourseComponent {
  sectionsToShow: number = 10;
  totalSections: number = 42;
  sectionsArray: any[];
  constructor() {
    this.sectionsArray = Array.from({ length: this.totalSections }, (_, i) => ({
      index: i + 1,
      panelOpenState: false,
    }));
  }
}
