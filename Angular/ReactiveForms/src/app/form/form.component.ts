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
      profileNameControl: new FormControl('', Validators.required),
      phoneControl: new FormControl('', Validators.required),
      cityControl: new FormControl('', Validators.required),
    }),
    companyGroup: new FormGroup({
      companyNameControl: new FormControl('', Validators.required),
      ownershipControl: new FormControl('', Validators.required),
      INNControl: new FormControl('', MyValidators.INNLength),
      KPPControl: new FormControl('000000000', MyValidators.INNLength),
      OKPOControl: new FormControl('', MyValidators.INNLength),
      dateControl: new FormControl('', Validators.required),
    }),
  });
  clearKPPControl() {
    this.form.get('companyGroup')?.get('KPPControl')?.setValue('');
  }
  setKPPControl() {
    this.form.get('companyGroup')?.get('KPPControl')?.setValue('000000000');
  }
}
