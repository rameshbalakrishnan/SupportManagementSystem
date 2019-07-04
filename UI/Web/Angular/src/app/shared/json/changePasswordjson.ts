import { FormData } from './../interface/form-data';
export const ChangePasswordForm: FormData[] = [

  {
    controlName: 'OldPassword',
    placeholder: 'Old Password',
    valueType: 'password',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 6
    }
  },
  {
    controlName: 'NewPassword',
    placeholder: 'New Password',
    valueType: 'password',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 6
    }
  },
  {
    controlName: 'ConfirmPassword',
    placeholder: 'Confirm Password',
    valueType: 'password',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 6
    }
  },
];
