import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {
  @Output() onSubmitted:EventEmitter<any> = new EventEmitter();
  @Output() onCancel:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPerson){
    this.onSubmitted.emit(newPerson);
  }

  cancel(){
    this.onCancel.emit();
  }
}
