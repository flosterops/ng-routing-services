import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private request: ApiService, private activatedRouter: ActivatedRoute) { 
    activatedRouter.params.subscribe(param => console.log(param));
  }

  id;
  visible = false;
  users = [];
  userForm:FormGroup;

  getUser() {
    return ({
      name: this.userForm.value.name,
      lastname: this.userForm.value.lastname,
      mail: this.userForm.value.mail
    });
  }

  onSubmit() {
    this.visible = true;
    this.request.addUser(this.getUser())
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(param => (this.id = param));
    console.log(this.id);
    this.userForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      lastname: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      mail: ['', [
        Validators.required,
        Validators.email
      ]]
    });

    this.userForm.valueChanges.subscribe(console.log);
    
  }

}
