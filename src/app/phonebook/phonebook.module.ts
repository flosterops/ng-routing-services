import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonebookRoutingModule } from './phonebook-routing.module';
import { PhonebookComponent } from './phonebook.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [PhonebookComponent],
  imports: [
    CommonModule,
    PhonebookRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PhonebookModule { }
