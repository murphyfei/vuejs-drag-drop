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
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FileButtonProperty',
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
    }
  }
}
</script>
