import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [MatChipsModule, MatIconModule,RouterModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {}
