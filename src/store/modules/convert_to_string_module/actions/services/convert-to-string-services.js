export function convertToString (formList) {
  var content = '<form class="form-horizontal">\n<fieldset>\n\n<!-- Form Name -->\n<legend>Form Name</legend>\n'

  for (var index in formList) {
    var object = formList[index]
    if (object.type === 1) {
      var textInputString = renderTextInputObject(object)
      content += textInputString
    } else if (object.type === 2) {
      var passwordInputString = renderPasswordInputObject(object)
      content += passwordInputString
    } else if (object.type === 3) {
      var prependTextString = renderPrependTextObject(object)
      content += prependTextString
    } else if (object.type === 21) {
      var fileButtonString = renderFileButtonObject(object)
      content += fileButtonString
    } else if (object.type === 22) {
      var singleButtonString = renderSingleButtonObject(object)
      content += singleButtonString
    }
  }

  content += '\n</fieldset>\n</form>\n'
  return content
}

export function renderTextInputObject (textInputObject) {
  var isRequireString = ''
  if (textInputObject.data.isRequire) {
    isRequireString = 'required=" "'
  }
  var textInputHtmlHeader = '\n<!-- Text input-->\n<div class="form-group">\n'
  var textInputLabel = '  <label class="col-md-4 control-label" for="' + textInputObject.data.id + '">' + textInputObject.data.labelName + '</label>  \n'
  var textInputColumn = '  <div class="' + textInputObject.data.size + '">\n'
  var textInputInput = '  <input id="' + textInputObject.data.id + '" name="' + textInputObject.data.id + '" type="text" ' +
    'placeholder="' + textInputObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n'
  var textInputHelp = '  <span class="help-block">' + textInputObject.data.helpText + '</span>  \n'
  var textInputEnding = '  </div>\n</div>\n'
  var content = textInputHtmlHeader + textInputLabel + textInputColumn + textInputInput + textInputHelp + textInputEnding
  return content
}

export function renderPasswordInputObject (passwordInputObject) {
  var isRequireString = ''
  if (passwordInputObject.data.isRequire) {
    isRequireString = 'required=" "'
  }
  var passwordInputHtmlHeader = '\n<!-- Password input-->\n<div class="form-group">\n'
  var passwordInputLabel = '  <label class="col-md-4 control-label" for="' + passwordInputObject.data.id + '">' + passwordInputObject.data.labelName + '</label>  \n'
  var passwordInputColumn = '  <div class="' + passwordInputObject.data.size + '">\n'
  var passwordInputInput = '  <input id="' + passwordInputObject.data.id + '" name="' + passwordInputObject.data.id + '" type="password" ' +
    'placeholder="' + passwordInputObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n'
  var passwordInputHelp = '  <span class="help-block">' + passwordInputObject.data.helpText + '</span>  \n'
  var passwordInputEnding = '  </div>\n</div>\n'
  var content = passwordInputHtmlHeader + passwordInputLabel + passwordInputColumn + passwordInputInput + passwordInputHelp + passwordInputEnding
  return content
}

export function renderPrependTextObject (prependTextObject) {
  var isRequireString = ''
  if (prependTextObject.data.isRequire) {
    isRequireString = 'required=" "'
  }
  var prependTextHtmlHeader = '\n<!-- Prepend Text-->\n<div class="form-group">\n'
  var prependTextLabel = '  <label class="col-md-4 control-label" for="' + prependTextObject.data.id + '">' + prependTextObject.data.labelName + '</label>  \n'
  var prependTextColumn = '  <div class="' + prependTextObject.data.size + '">\n'
  var prependTextInputGroup = '    <div class="input-group">\n      <span class="input-group-addon">' + prependTextObject.data.prependText + '</span>\n'
  var prependTextInput = '      <input id="' + prependTextObject.data.id + '" name="' + prependTextObject.data.id + '" type="text" ' +
    'placeholder="' + prependTextObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n    </div>\n'
  var prependTextHelp = '    <span class="help-block">' + prependTextObject.data.helpText + '</span>  \n'
  var prependTextEnding = '  </div>\n</div>\n'
  var content = prependTextHtmlHeader + prependTextLabel + prependTextColumn + prependTextInputGroup + prependTextInput + prependTextHelp + prependTextEnding
  return content
}

export function renderFileButtonObject (fileButtonObject) {
  var fileButtonHtmlHeader = '\n<!-- File Button-->\n<div class="form-group">\n'
  var fileButtonLabel = '  <label class="col-md-4 control-label" for="' + fileButtonObject.data.id + '">' + fileButtonObject.data.labelName + '</label>  \n'
  var fileButtonColumn = '  <div class="col-md-4">\n'
  var fileButtonInput = '    <input id="' + fileButtonObject.data.id + '" name="' + fileButtonObject.data.id + '" class="input-file" type="file">\n'
  var fileButtonEnding = '  </div>\n</div>\n'

  var content = fileButtonHtmlHeader + fileButtonLabel + fileButtonColumn + fileButtonInput + fileButtonEnding
  return content
}

export function renderSingleButtonObject (singleButtonObject) {
  var singleButtonHtmlHeader = '\n<!-- Single Button-->\n<div class="form-group">\n'
  var singleButtonLabel = '  <label class="col-md-4 control-label" for="' + singleButtonObject.data.id + '">' + singleButtonObject.data.labelName + '</label>  \n'
  var singleButtonColumn = '  <div class="col-md-4">\n'
  var singleButtonInput = '    <button id="' + singleButtonObject.data.id + '" name="' + singleButtonObject.data.id + '" class="btn ' +
    singleButtonObject.data.buttonType + '">' + singleButtonObject.data.buttonText + '</button>\n'
  var singleButtonEnding = '  </div>\n</div>\n'

  var content = singleButtonHtmlHeader + singleButtonLabel + singleButtonColumn + singleButtonInput + singleButtonEnding
  return content
}
