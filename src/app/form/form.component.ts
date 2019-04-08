import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, EditUser, User } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private request: ApiService, 
    private activatedRouter: ActivatedRoute) {
      activatedRouter
    }

  id;
  visible = false;
  users = [];
  userForm: FormGroup;
  inputName: string;
  inputLastname: string;
  inputMail: string;

  getUser() {
    return ({
      name: this.userForm.value.name,
      lastname: this.userForm.value.lastname,
      mail: this.userForm.value.mail,
      _id: this.id.id
    });
  }

  getEdit() {
    if(this.id.id) {
      this.request.getUser(this.id.id)
        .subscribe( 
        (data: EditUser) => {
          this.inputName = data.item.name;
          this.inputLastname = data.item.lastname;
          this.inputMail = data.item.mail;
        });
    }
  }

  addUser() {
    if(!this.id.id) {
      this.onSubmit();
    } else {
      this.update();
    }
  }

  onSubmit() {
    this.request.addUser(this.getUser())
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  paintForm() {
    this.userForm = this.formBuilder.group({
      name: [this.inputName, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      lastname: [this.inputLastname, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      mail: [this.inputMail, [
        Validators.required,
        Validators.email
      ]]
    });
  }

  update() {
    this.request.updateUser(this.getUser())
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }

  ngOnInit() {
    this.inputName = '',
    this.inputLastname = '',
    this.inputMail = '';
    this.visible = true;
    this.activatedRouter.params.subscribe(param => (this.id = param));
    this.request.getUser(this.id.id)
      .subscribe(
        (data: EditUser) => {
          this.inputName = data.item.name;
          this.inputLastname = data.item.lastname;
          this.inputMail = data.item.mail;
          this.paintForm();

        }
      );
    
    this.paintForm();
    
  }

}