import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  visible = false;

  userForm:FormGroup;

  onSubmit() {
    this.visible = true;
    console.log(this.userForm)
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      lastname: ['',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]{2,30}$/)
      ]],
      mail: ['', [
        Validators.required,
        Validators.email
      ]]
    });
    console.log(this.userForm);
    console.log(this.userForm.controls)

    this.userForm.valueChanges.subscribe(console.log);
    
  }

}
