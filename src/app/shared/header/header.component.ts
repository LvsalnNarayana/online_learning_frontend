import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { NotificationsContainerComponent } from '../notifications/notifications-container/notifications-container.component';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: { class: 'sticky top-0 left-0' },
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    OverlayModule,
    MatCardModule,
    NotificationsContainerComponent,
    MatBadgeModule,
    ProfileMenuComponent,
  ],
})
export class HeaderComponent implements OnInit {
  notificationsOpen = false;
  profileMenuOpen = false;
  instructorPathCheck = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.instructorPathCheck = this.router.url.includes('instructor');
    });
  }
}
