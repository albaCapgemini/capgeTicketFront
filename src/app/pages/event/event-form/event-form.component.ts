import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit{
  event : Event = new Event;
  id: string;
  sub:any;
  eventForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      this.eventForm = this.fb.group({
        name:[""],
        type:[""],
        description:[""],
        date:[""],
        time:[""],
        location:[""]
      });
  }

  save(event: Event){
    this.eventService.addEvent(event).subscribe({
      next:(result) =>{
        this.router.navigate(['/event']);
      },
      error: (error) => console.log(error)
    });
  }

  
}
