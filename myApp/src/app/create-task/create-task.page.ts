import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  selectedDate!: string;

  constructor() { }

  ngOnInit() {
  }

  handleDateChange(event: any) {
    const date = new Date(event.target.value);
    const day = date.getDate();
    this.selectedDate = `Dia ${day}`;
  }
}
