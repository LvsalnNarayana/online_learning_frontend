import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component.js';
import { HomeComponent } from './pages/home/home.component.js';
import { ProfileComponent } from './pages/profile/profile.component.js';
import { DashboardComponent } from './pages/dashboard/dashboard.component.js';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component.js';
import { CartComponent } from './pages/cart/cart.component.js';
import { SearchResultsComponent } from './pages/search-results/search-results.component.js';
import { SignupComponent } from './pages/signup/signup.component.js';
import { InstructorDashboardComponent } from './pages/instructor-dashboard/instructor-dashboard.component.js';
import { MessagesComponent } from './pages/messages/messages.component.js';
import { LearnCourseComponent } from './pages/learn-course/learn-course.component.js';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/:profileComponent',
    component: ProfileComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'instructor',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: InstructorDashboardComponent,
      },
    ],
  },
  {
    path: 'course',
    children: [
      {
        path: 'search',
        component: SearchResultsComponent,
      },
      {
        path: ':courseId',
        component: CourseDetailComponent,
      },
      {
        path: ':courseId/learn',
        component: LearnCourseComponent,
      },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
