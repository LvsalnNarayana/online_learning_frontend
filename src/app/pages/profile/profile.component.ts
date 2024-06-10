import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('profileComponent'));

    if (
      this.route.snapshot.paramMap.get('profileComponent') !== 'edit-user' &&
      this.route.snapshot.paramMap.get('profileComponent') !==
        'payment-methods' &&
      this.route.snapshot.paramMap.get('profileComponent') !==
        'purchase-history'
    ) {
      this.router.navigate(['/']);
    }
  }
}
