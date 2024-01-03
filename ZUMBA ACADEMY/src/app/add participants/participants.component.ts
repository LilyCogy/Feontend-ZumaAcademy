import { Component } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {

  firstName = "";
  lastName = "";
  batch = "";
  
  participants = [
    {firstName: "Cogitater", lastName: "Sigauke", batch: " 1", id: 1},
    {firstName: "Lilian", lastName: "Sigauke", batch: "2", id: 2},
    {firstName: "Mark", lastName: "Otto", batch: "3", id: 3},
    {firstName: "Jacob", lastName: "Thornton", batch: " 4", id: 4},
    {firstName: "Larry", lastName: "Bird", batch: "5", id: 5},
  ]

  setFirstName(firstName: string){
    this.firstName = firstName;
  }

  setLastName(lastName: string){
    this.lastName = lastName; 
  }

  setParticipants(batch: string){
    this.batch = batch;
  }

  setBatch(batch: string){
    this.batch = batch;
  }


  addParticipants(){
    this.participants.push({
      firstName: this.firstName,
      lastName: this.lastName,
      batch: this.batch,
      id: this.participants.length + 1
    })

    this.firstName = "";
    this.lastName = "";
    this.batch = "";
  }
}