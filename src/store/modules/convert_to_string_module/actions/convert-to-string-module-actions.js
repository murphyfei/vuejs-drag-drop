import { convertToString } from './services/convert-to-string-services'

export const actions = {
  // data = { formList }
  convert_into_string__convert_to_string_module (context, data) {
    var formList = data.formList

    return convertToString(formList)
  }
}
