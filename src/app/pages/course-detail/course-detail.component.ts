import { NgClass, NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
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
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  showMore: boolean = false;
  panelOpenState: boolean = false;
  sectionsToShow: number = 10;
  totalSections: number = 42;
  sectionsArray: number[];
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  constructor() {
    this.sectionsArray = Array.from(
      { length: this.totalSections },
      (_, i) => i + 1
    );
  }
}
