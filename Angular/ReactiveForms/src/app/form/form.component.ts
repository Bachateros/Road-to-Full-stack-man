import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../my.validators';
import { IFormData, IContact } from '../test/test.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  submit() {
    console.log(this.form);
  }
  form!: FormGroup;
  @Input() formData!: IFormData;
  ngOnInit(): void {
    this.form = new FormGroup({
      accountGroup: new FormGroup(
        {
          emailFormControl: new FormControl(
            this.formData?.account.email || '',
            [Validators.required, Validators.email]
          ),
          passwordFormControl: new FormControl(
            this.formData.account.password || '',
            [Validators.required, Validators.minLength(6)]
          ),
          confirmPasswordFormControl: new FormControl(
            this.formData.account.confirmPassword || '',
            [Validators.required, Validators.minLength(6)]
          ),
        },
        { validators: MyValidators.checkPasswords }
      ),
      profileGroup: new FormGroup({
        profileNameControl: new FormControl(
          this.formData.profile.name || '',
          Validators.required
        ),
        phoneControl: new FormControl(
          this.formData.profile.phone || '',
          Validators.required
        ),
        cityControl: new FormControl(
          this.formData.profile.city || '',
          Validators.required
        ),
      }),
      companyGroup: new FormGroup({
        companyNameControl: new FormControl(
          this.formData.company.name || '',
          Validators.required
        ),
        ownershipControl: new FormControl(
          this.formData.company.ownership || '',
          Validators.required
        ),
        INNControl: new FormControl(
          this.formData.company.INN || '',
          MyValidators.INNLength
        ),
        KPPControl: new FormControl(
          this.formData.company.KPP || '000000000',
          MyValidators.INNLength
        ),
        OKPOControl: new FormControl(
          this.formData.company.OKPO || '',
          MyValidators.INNLength
        ),
        dateControl: new FormControl(
          this.formData.company.date || '',
          Validators.required
        ),
      }),
      contactsArray: new FormArray([]),
    });
    this.setContacts();
  }
  addContact(contact?: IContact) {
    const contactGroup = new FormGroup({
      contactNameControl: new FormControl(
        contact?.name || '',
        Validators.required
      ),
      postControl: new FormControl(contact?.post || '', Validators.required),
      contactPhoneControl: new FormControl(
        contact?.phone || '',
        Validators.required
      ),
    });
    (<FormArray>this.form.get('contactsArray')).push(contactGroup);
  }
  setContacts() {
    this.formData.contacts.forEach((contact) => {
      this.addContact(contact);
    });
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
