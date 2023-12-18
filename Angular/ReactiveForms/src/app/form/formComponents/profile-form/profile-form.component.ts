import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    phoneControl: new FormControl('', [Validators.required]),
    cityControl: new FormControl('', Validators.required),
  });
}
