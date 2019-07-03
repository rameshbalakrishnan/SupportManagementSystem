
import { FormData } from './../interface/form-data';

export const RequesteditForm: FormData[] = [
  
  {
    controlName: 'RequestPriority',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Request Priority',
    validators: {
      required: true
    }
  },
  {
    controlName: 'RequestDescription',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Request Description',
    validators: {
      required: true,
      maxlength: 50,
      pattern: /^[a-zA-Z ]+$/,
      message: 'Accept only Alphabet'
    }
  },
  {
    controlName: 'RequestShortDescription',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Request Short Description',
    validators: {
      required: true,
      pattern: /^[a-zA-Z ]+$/,
      message: 'Accept only Alphabet'
    }
  },
 {
  controlName: 'RequestModule',
  controlType: 'text',
  valueType: 'text',
  placeholder: 'Request Module',
  validators: {
    required: true
  }
}
  ];