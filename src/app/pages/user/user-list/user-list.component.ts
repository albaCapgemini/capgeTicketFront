import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
  
}) 
export class UserListComponent implements OnInit {
  users: Array<any> = [];

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  remove(id: any) {
    this.usersService.removeUser(id)
    .subscribe((data) => {
      alert('Se ha eliminado correctamente');
      window.location.reload();
    });
  }

  update(id: any) {
    this.router.navigate(['/form', id]);
  }
}
