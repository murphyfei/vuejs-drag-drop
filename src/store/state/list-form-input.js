export const formInputList = [
  {
    type: 1, // Text input
    data: {
      id: 'textInput',
      labelName: 'Text Input',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-4'
    }
  },
  {
    type: 2, // Password Input
    data: {
      id: 'passwordInput',
      labelName: 'Password Input',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-4'
    }
  },
  {
    type: 3, // Prepended Text
    data: {
      id: 'prependedText',
      labelName: 'Prepended Text',
      prependText: 'prepend',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-4'
    }
  }
]

// Button type has type from 21 - 30
export const buttonList = [
  {
    type: 21, // File Button
    data: {
      id: 'fileButton',
      labelName: 'File Button'
    }
  },
  {
    type: 22, // Single Button
    data: {
      id: 'singleButton',
      labelName: 'Single Button',
      buttonText: 'Button',
      buttonType: 'btn-primary'
    }
  }
]
