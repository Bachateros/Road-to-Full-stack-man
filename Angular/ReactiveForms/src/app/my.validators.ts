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
