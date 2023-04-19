import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit{
  events: Array<any> = [];

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
      this.eventService.getEvents().subscribe((data) =>{
        this.events = data;
      });
  }

  remove(id:any){
    this.eventService.removeEvent(id)
    .subscribe((data) =>{
      alert('Se ha eliminado correctamente');
      window.location.reload();
    });
  }

  update(id: any) {
    this.router.navigate(['/event/form', id]);
  }
}
