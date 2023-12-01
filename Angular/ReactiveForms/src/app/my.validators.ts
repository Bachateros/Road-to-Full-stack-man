import { AbstractControl, ValidationErrors } from '@angular/forms';
export class MyValidators {
  static checkPasswords(
    controlGroup: AbstractControl
  ): ValidationErrors | null {
    let password = controlGroup.get('passwordFormControl')?.value;
    let confirmPassword = controlGroup.get('confirmPasswordFormControl')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }
}
//   static mustMatch(
//     controlName: string,
//     matchingControlName: string
//   ): ValidationErrors | null {
//     return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
//         return;
//       }

//       // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//       return null;
//     };
//   }
