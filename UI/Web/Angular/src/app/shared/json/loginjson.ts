import { FormData } from './../interface/form-data';
export const LoginForm: FormData[] = [

  {
    controlName: 'Email',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Email',
    validators: {
      required: true,
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
      message: 'Invalid email'
    }
  },
  {
    controlName: 'Password',
    placeholder: 'Password',
    valueType: 'password',
    controlType: 'text',
    validators: {
      required: true
    }
  },
];
