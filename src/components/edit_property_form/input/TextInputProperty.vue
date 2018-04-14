<template>
  <form role="form">
    <div class="form-group">
      <label class="col-md-12"> ID / Name </label>
      <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="id" v-model="elementBegin.data.id">
      </div>
    </div><div class="form-group">
    <label class="col-md-12 "> Label Text </label>
    <div class="col-md-10">
      <input class="form-control field" data-type="input" type="text" name="label" v-model="elementBegin.data.labelName">
    </div>
  </div><div class="form-group">
    <label class="col-md-12 "> Placeholder </label>
    <div class="col-md-10">
      <input class="form-control field" data-type="input" type="text" name="placeholder" v-model="elementBegin.data.placeholder">
    </div>
  </div><div class="form-group">
    <label class="col-md-12 "> Help Text </label>
    <div class="col-md-10">
      <input class="form-control field" data-type="input" type="text" name="helptext" v-model="elementBegin.data.helpText">
    </div>
  </div><div class="checkbox">
    <label>
      <input type="checkbox" data-type="checkbox" class="field" name="required" v-model="elementBegin.data.isRequire">
      Required
    </label>
  </div>
    <div class="form-group">
      <label class="col-md-4 "> Input Size </label>
      <div class="col-md-5">
        <select class="form-control field" data-type="select" v-model="elementBegin.data.size">

          <option v-for="(option, index) in inputSize" :value="option.value" :key="index">{{ option.label }}</option>

        </select>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TextInputProperty',
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
      inputSize: state => state.inputSize
    })
  },
  methods: {
    cancel () {
      this.elementBegin = JSON.parse(JSON.stringify(this.element))
    },
    save () {
      this.elementProperty.data.id = this.elementBegin.data.id
      this.elementProperty.data.labelName = this.elementBegin.data.labelName
      this.elementProperty.data.placeholder = this.elementBegin.data.placeholder
      this.elementProperty.data.helpText = this.elementBegin.data.helpText
      this.elementProperty.data.isRequire = this.elementBegin.data.isRequire
      this.elementProperty.data.size = this.elementBegin.data.size
      console.log(this.elementProperty)
    }
  }
}
</script>
