import { FormData } from './../interface/form-data';

export const UserEditForm: FormData[] = [
  
    {
      controlName: 'FirstName',
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
      controlName: 'LastName',
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
  }
  ];