import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/common';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions;
  Events = [];
  ToDay = new Date();
  dates;
  today= new Date();
  next;
  next1;
  next2;
  Users: string[];
  Projects: string[];
  Years: number[] = [];
  event: boolean = false;
  name: string;
  eventDate: string;
  evennements = [];
  ngOnInit(): void {
    this.today.setFullYear(2019);
    this.today.setMonth(11);
    this.today.setDate(1);
    this.dates = new Array();

    while(this.today.getFullYear() != 2030){
      if (this.today.getMonth() === 11) {
        this.next = new Date(this.today.getFullYear() + 1, 0, 1);
      } else {
          this.next = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 1);
      }
      this.dates.push(this.today);
      this.today = this.next;
    }
    console.log(this.ToDay.valueOf());
    console.log("the full date of today is " + this.ToDay);
    console.log("today.getDate() " + this.ToDay.getDate());

    console.log("today.getMonth() " + this.ToDay.getMonth());
    console.log("today.getDay() " +this.ToDay.getDay());
    console.log("today.getFullYear() " +this.ToDay.getFullYear());

    this.Users = ['test1', 'test2', 'test3', 'test4'];


    this.evennements = [];
  }



constructor() { }

onDayClick($event){
  console.log($event);
  this.eventDate = $event.currentTarget.id.substr(0,);
    console.log("-->" + $event.currentTarget.id);
    if($event.currentTarget.id.charAt(0)=='S'){
      this.name = 'Sara Doro';
    }else if ($event.currentTarget.id.charAt(0)=='K'){
      this.name = 'Karine Florano';
    }else {
      this.name = 'Amelie Rostard';
    }
    this.event=true;
    this.evennements.push($event.currentTarget.id);
    console.log(this.evennements);

  }

}