import { Component } from '@angular/core';

export interface IContact {
  name: string;
  post: string;
  phone: number;
}
export interface IFormData {
  account: {
    email: string;
    password: string | number;
    confirmPassword: string | number;
  };
  profile: {
    name: string;
    phone: number;
    city: string;
  };
  company: {
    name: string;
    ownership: 'indiv' | 'law';
    INN: number;
    OKPO: number;
    KPP?: string | number;
    date: Date;
  };
  contacts: Array<IContact>;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  formData: IFormData = {
    account: {
      email: 'bachatero@mira.com',
      password: 'secretPassword123',
      confirmPassword: 'secretPassword123',
    },
    profile: {
      name: 'Bacho',
      phone: 88005553535,
      city: 'Saransk',
    },
    company: {
      name: 'OAO "Tancevach"',
      ownership: 'law',
      INN: 777777777,
      OKPO: 777777777,
      KPP: '1231231z1',
      date: new Date(),
    },
    contacts: [
      {
        name: 'Mentor',
        post: 'Team Leader',
        phone: 87777777777,
      },
      {
        name: 'Vasiliy',
        post: 'Boozer',
        phone: 80000000000,
      },
    ],
  };
}
