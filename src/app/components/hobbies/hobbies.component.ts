import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  @Output() hobbiesUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();

  hobbies: string[] = [];
  newHobby: string = '';

  addHobby() {
    if (this.newHobby && !this.hobbies.includes(this.newHobby)) {
      this.hobbies.push(this.newHobby);
      this.newHobby = '';
      this.hobbiesUpdated.emit(this.hobbies);
    }
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
    this.hobbiesUpdated.emit(this.hobbies);
  }
}
