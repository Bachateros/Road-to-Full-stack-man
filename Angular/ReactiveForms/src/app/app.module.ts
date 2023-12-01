import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccountFormComponent,
    ProfileFormComponent,
    CompanyFormComponent,
    ContactsFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
