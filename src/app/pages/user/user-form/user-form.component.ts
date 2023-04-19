import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  user: User = new User;
  id: string = "";
  sub: any;
  angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

  var id$ = this.route.snapshot.paramMap.get('id');
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    if (id$) {
      this.id = id$;
      console.log("el id es :"+this.id)
      this.usersService
        .getById(id$)
        .subscribe((userData) => this.showData(userData));
    }
  }

  showData(data: any) {
    this.angForm.controls['name'].setValue(data.name);
    this.angForm.controls['lastname'].setValue(data.lastname);
    this.angForm.controls['mail'].setValue(data.mail);
    this.angForm.controls['password'].setValue(data.password);
  }

  summited(form: User) {
    if (this.id ==="") {
      this.save(form);
    } else {
      this.update(form);
    }
  }

  save(form: User) {
    this.usersService.addUser(form).subscribe({
      next: (result) => {
        this.router.navigate(['/list']);
      },
      error: (error) => console.error(error),
    });
  }

  update(form: User) {
    form.id = this.id;
    this.usersService.updateUser(form).subscribe({
      next: (result) => {
        this.router.navigate(['/list']);
      },
      error: (error) => console.error(error),
    });
  }

}
