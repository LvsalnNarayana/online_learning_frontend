import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-continue-course',
  standalone: true,
  imports: [MatProgressBarModule,MatIconModule],
  templateUrl: './continue-course.component.html',
  styleUrl: './continue-course.component.css',
  
})
export class ContinueCourseComponent implements OnInit {
  @Input() test: any;

  ngOnInit() {
    console.log(this.test); 
  }
}