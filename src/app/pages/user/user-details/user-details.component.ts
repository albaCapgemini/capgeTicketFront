import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: string = '';
  user: User = new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    var id$ = this.route.snapshot.paramMap.get('id');
    if (id$) {
      this.usersService
        .getById(id$)
        .subscribe((userData) => this.showData(userData));
    }
  }
  showData(data: any) {
    this.user.name = data.name;
    this.user.lastname = data.lastname;
    this.user.mail = data.mail;
    this.user.password = data.password;
  }

  update(id: any) {
    this.router.navigate(['/user/form', id]);
  }
}
