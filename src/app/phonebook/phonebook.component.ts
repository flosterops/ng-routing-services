import { Component, OnInit } from '@angular/core';
import { ApiService, Data } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(private request: ApiService, private router: Router) {}

  users = [];
  
  delUser(id: string) {
    this.request.delUser(id)
      .subscribe(
        () => this.ngOnInit()
      );
  }

  onEdit(user) {
    this.router.navigate(['/form', user._id])
  }

  ngOnInit() {
    this.request.getUsers()
      .subscribe(
        (data: Data) => (this.users = data.items)
      );
  }


}
