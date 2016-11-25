import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeopleComponent } from './people.component';
import { ProfileComponent } from './profile/profile.component';
import { NewpersonComponent } from './newperson/newperson.component';

import { PeopleService } from './people.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PeopleComponent
  ],
  providers:[
    PeopleService
  ],
  declarations: [PeopleComponent, ProfileComponent, NewpersonComponent]
})
export class PeopleModule { }
