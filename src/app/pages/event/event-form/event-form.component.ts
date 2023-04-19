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
    var id$ = this.route.snapshot.paramMap.get('id');
      this.eventForm = this.fb.group({
        name:[""],
        type:[""],
        description:[""],
        date:[""],
        time:[""],
        location:[""]
      });

      if (id$) {
        this.id = id$;
        this.eventService
          .getById(id$)
          .subscribe((eventData) => this.showData(eventData));
      }
  }

  showData(data: any) {
    this.eventForm.controls['name'].setValue(data.name);
    this.eventForm.controls['type'].setValue(data.type);
    this.eventForm.controls['description'].setValue(data.description);
    this.eventForm.controls['date'].setValue(data.date);
    this.eventForm.controls['time'].setValue(data.time);
    this.eventForm.controls['location'].setValue(data.location);
  }

  summited(form: Event) {
    if (this.id ==="") {
      this.save(form);
    } else {
      this.update(form);
    }
  }

  save(event: Event){
    this.eventService.addEvent(event).subscribe({
      next:(result) =>{
        this.router.navigate(['/event']);
      },
      error: (error) => console.log(error)
    });
  }

  update(event: Event){
    this.eventService.updateEvent(event).subscribe({
      next:(result) =>{
        this.router.navigate(['/event']);
      },
      error: (error) => console.log(error)
    });
  }

}
