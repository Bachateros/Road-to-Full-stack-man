import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/my.validators';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent {
  companyForm = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    typeOfCompanyControl: new FormControl('', Validators.required),
    INNControl: new FormControl('', MyValidators.INNLength),
    KPPControl: new FormControl('', MyValidators.INNLength),
    OKPOControl: new FormControl('', MyValidators.INNLength),
    dateControl: new FormControl('', Validators.required),
  });
}
