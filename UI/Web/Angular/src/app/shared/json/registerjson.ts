// import {ControlGroup} from '@angular/common';
import { FormData } from './../interface/form-data';

export const RegisterForm: FormData[] = [
    {
      controlName: 'First Name',
      controlType: 'text',
      valueType: 'text',
      placeholder: 'First Name',
      validators: {
        required: true,
        maxlength: 50,
        pattern: /^[a-zA-Z ]+$/,
        message: 'Accept only Alphabet'
      }
    },
    {
      controlName: 'Last Name',
      controlType: 'text',
      valueType: 'text',
      placeholder: 'Last Name',
      validators: {
        required: true,
        maxlength: 50,
        pattern: /^[a-zA-Z ]+$/,
        message: 'Accept only Alphabet'
      }
    },
    {
      controlName: 'Email',
      controlType: 'text',
      valueType: 'text',
      placeholder: 'Email Address',
      validators: {
        required: true,
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        message: 'Invalid email'
      }
    },
   {
    controlName: 'Mobile',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Mobile Number',
    validators: {
      required: true,
      maxlength: 10,
      pattern: /^[0-9]+$/,
      message: 'Accept only Number'
    }
  },
    {
      controlName: 'Password',
      placeholder: 'Password',
      valueType: 'password',
      controlType: 'text',
      validators: {
        required: true,
        minlength: 6
      }
    },
    {
      controlName: 'Confirm Password',
      placeholder: 'Confirm Password',
      valueType: 'password',
      controlType: 'text',
      validators: {
        required: true,
        minlength: 6,
        //  mismatch :matchingPasswords('Password', 'Confirm Password') 
      }
    }
  ];
//   export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
//     return (group: ControlGroup): {
//         [key: string]: any
//     } => {
//         let password = group.controls[passwordKey];
//         let confirmPassword = group.controls[confirmPasswordKey];

//         if (password.value !== confirmPassword.value) {
//             return {
//                 mismatchedPasswords: true
//             };
//         }
//     }
// }