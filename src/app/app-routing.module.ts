import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { EventFormComponent } from './pages/event/event-form/event-form.component';

const routes: Routes = [
  {
    path : "user",
    component : UserListComponent
  },
  {
    path : "user/form/:id",
    component : UserFormComponent
  },
  {
    path : "user/form",
    component : UserFormComponent
  },
  {
    path : "event",
    component : EventListComponent
  },
  {
    path : "event/form/:id",
    component : EventFormComponent
  },
  {
    path : "event/form",
    component : EventFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
