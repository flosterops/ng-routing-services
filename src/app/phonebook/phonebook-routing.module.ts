import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookComponent } from './phonebook.component';

const routes: Routes = [
  { path: 'phonebook', component: PhonebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule { }
