<template>
  <draggable class="list-group input-form-tab" v-model="formInputList" :options="formInputOptions" @start="isDragging=true" @end="isDragging=false">
    <div v-for="(element, index) in formInputList" :key="index">
      <text-input v-if="element.type === 1" :element="element" :isEditable="false" :formList="formList" :index="index"></text-input>
      <password-input v-if="element.type === 2" :element="element" :isEditable="false" :formList="formList" :index="index"></password-input>
      <prepended-text v-if="element.type === 3" :element="element" :isEditable="false" :formList="formList" :index="index"></prepended-text>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import TextInput from '@/components/field_components/form_input/TextInput'
import PasswordInput from '@/components/field_components/form_input/PasswordInput'
import PrependedText from '@/components/field_components/form_input/PrependedText'

export default {
  name: 'InputForTab',
  components: {
    TextInput,
    PasswordInput,
    PrependedText,
    draggable
  },
  props: [
    'formList'
  ],
  data () {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    formInputOptions () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: 'clone',
          put: false
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    ...mapState({
      formInputList: state => state.formInputList
    })
  },
  methods: {

  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
