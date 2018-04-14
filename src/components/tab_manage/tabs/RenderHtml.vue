<template>
  <div>
    <h3>Rendered source of your form:</h3>
    <textarea id="render"
              class="col-md-12"
              style="height: 400px; max-width: 100%"
              v-model="htmlRender"
    ></textarea>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RenderHtml',
  props: [
    'formList'
  ],
  data () {
    return {
      htmlRender: ''
    }
  },
  created () {
    this.convertToString(this.formList)
  },
  methods: {
    ...mapActions([
      'convert_into_string__convert_to_string_module'
    ]),
    convertToString (formList) {
      var actionData = {
        formList: formList
      }
      this.convert_into_string__convert_to_string_module(actionData)
        .then(content => {
          this.htmlRender = content
        })
    }
  },
  watch: {
    formList: {
      handler: function (newValue, oldValue) {
        this.convertToString(newValue)
      },
      deep: true
    }
  }
}
</script>
