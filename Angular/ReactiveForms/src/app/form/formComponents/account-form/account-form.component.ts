import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyValidators } from 'src/app/my.validators';
@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(6),
  // ]);
  // confirmPasswordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(6),
  //   MyValidators.checkPasswords,
  // ]);
  accountForm = new FormGroup(
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
  );
}
