<template>
  <form role="form">
    <div class="form-group">
      <label class="col-md-12"> ID / Name </label>
      <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="id" v-model="elementBegin.data.id">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-12 "> Label Text </label>
      <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="label"
               v-model="elementBegin.data.labelName">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-12 "> Button Label </label>
      <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="buttonText"
               v-model="elementBegin.data.buttonText">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 "> Button Type </label>
      <div class="col-md-5">
        <select class="form-control field" data-type="select" v-model="elementBegin.data.buttonType">

          <option v-for="(option, index) in buttonType" :value="option.value" :key="index">{{ option.label }}</option>

        </select>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SingleButtonProperty',
  props: [
    'element'
  ],
  data () {
    return {
      elementBegin: JSON.parse(JSON.stringify(this.element)),
      elementProperty: this.element
    }
  },
  computed: {
    ...mapState({
      buttonType: state => state.buttonType
    })
  },
  methods: {
    cancel () {
      this.elementBegin = JSON.parse(JSON.stringify(this.element))
    },
    save () {
      this.elementProperty.data.id = this.elementBegin.data.id
      this.elementProperty.data.labelName = this.elementBegin.data.labelName
      this.elementProperty.data.buttonText = this.elementBegin.data.buttonText
      this.elementProperty.data.buttonType = this.elementBegin.data.buttonType
    }
  }
}
</script>
