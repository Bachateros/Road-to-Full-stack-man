import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../my.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  submit() {
    console.log(this.form);
  }
  form = new FormGroup({
    accountGroup: new FormGroup(
      {
        emailFormControl: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        passwordFormControl: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPasswordFormControl: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      { validators: MyValidators.checkPasswords }
    ),
    profileGroup: new FormGroup({
      profileNameControl: new FormControl(''),
      phoneControl: new FormControl(''),
      cityControl: new FormControl(''),
    }),
    companyGroup: new FormGroup({
      companyNameControl: new FormControl(''),
      ownershipControl: new FormControl(''),
      dateControl: new FormControl(''),
    }),
  });
}
