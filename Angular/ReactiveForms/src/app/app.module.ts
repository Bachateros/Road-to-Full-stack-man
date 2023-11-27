import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccountFormComponent,
    ProfileFormComponent,
    CompanyFormComponent,
    ContactsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
