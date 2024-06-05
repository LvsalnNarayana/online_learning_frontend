import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContinueCourseComponent } from '../continue-course/continue-course.component.js';
import { CourseComponent } from '../course/course.component.js';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-carousel',
  standalone: true,
  imports: [CourseComponent, SlickCarouselModule, MatIconModule, NgIf],
  templateUrl: './course-carousel.component.html',
  styleUrl: './course-carousel.component.css',
})
export class CourseCarouselComponent {
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    dots: false,
    arrows: false,
  };
  slickInitialized: boolean = false;
  slickInit(_e: any) {
    this.slickInitialized = true;
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
