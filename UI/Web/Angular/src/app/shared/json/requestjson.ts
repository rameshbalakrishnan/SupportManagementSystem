
import { FormData } from './../interface/form-data';

export const RequestForm: FormData[] = [

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
    placeholder: 'Enter Request Description',
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
    placeholder: 'Enter Request Short Description',
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
  },
  {
    controlName: 'RequestModule',
    controlType: 'dropdown',
    valueType: 'dropdown',
    options:
      [
        { optionName: 'solid', value: '1' },
        { optionName: 'great', value: '2' },
        { optionName: 'good', value: '3' },
        { optionName: 'unproven', value: '4' }
      ],
    validators: {
      required: true
    }
  }

];
