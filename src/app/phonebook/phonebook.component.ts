import { Component, OnInit } from '@angular/core';
import { ApiService, Data } from '../api.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(private request: ApiService) {}

  users = [];
  
  delUser(id: string) {
    this.request.delUser(id)
      .subscribe(
        (response) => this.ngOnInit()
      );
  }

  // editUser(){

  // }

  ngOnInit() {
    this.request.getUsers()
      .subscribe(
        (data: Data) => (this.users = data.items)
      );
  }


}
