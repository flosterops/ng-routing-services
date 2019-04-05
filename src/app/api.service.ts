import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  name: string,
  lastname: string,
  mail: string
}

export interface Data {
  items: Array<Object>,
  success: Boolean
}
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  url:string = 'http://localhost:8008/api';
  addUser(obj: User) {
    return this.http.post(this.url + '/phonebook/create', obj);
  }

  getUsers() {
    return this.http.post(this.url + '/phonebook/get', {});
  }

  delUser(id: string) {
    return this.http.get(this.url + '/phonebook/delete/' + id);
  }
}