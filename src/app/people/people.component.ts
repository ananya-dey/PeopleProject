import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isAddingNewPerson:boolean = false;
  people = [];
  constructor(private ps:PeopleService) { }

  ngOnInit() {
    this.ps.PeopleInfo()
      .subscribe(res=>{
        this.people = res;
      });
  }

  onSubmit(newPerson){
    this.people.push(newPerson);
    this.isAddingNewPerson = false;
  }

}
