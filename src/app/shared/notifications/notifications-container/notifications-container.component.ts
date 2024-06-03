import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component.js';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-notifications-container',
  standalone: true,
  imports: [
    NotificationComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgFor,
    ScrollingModule,
    MatTooltipModule
  ],
  templateUrl: './notifications-container.component.html',
  styleUrl: './notifications-container.component.css',
})
export class NotificationsContainerComponent {}
