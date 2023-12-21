import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    contactsArray: new FormArray([]),
  });
  addContact() {
    // const contact = new FormGroup({
    //   contactNameControl: new FormControl('', Validators.required),
    //   postControl: new FormControl('', Validators.required),
    //   contactPhoneControl: new FormControl('', Validators.required),
    // });

    const contactGroup = new FormGroup({
      contactNameControl: new FormControl('', Validators.required),
      postControl: new FormControl('', Validators.required),
      contactPhoneControl: new FormControl('', Validators.required),
    });
    (<FormArray>this.form.get('contactsArray')).push(contactGroup);
    // (<FormArray>this.form.get('contactsArray')).push(postControl);
    // (<FormArray>this.form.get('contactsArray')).push(contactPhoneControl);
    console.log('---------- ');
    console.log(this.form.get('contactsArray'));
    console.log('---------- ');

    console.log((<FormArray>this.form.get('contactsArray')).controls);
  }
  getContacts() {
    return (this.form.get('contactsArray') as FormArray).controls;
  }
  clearKPPControl() {
    this.form.get('companyGroup')?.get('KPPControl')?.setValue('');
  }
  setKPPControl() {
    this.form.get('companyGroup')?.get('KPPControl')?.setValue('000000000');
  }
}
