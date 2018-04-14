<template>
  <div class="container" id="test">
    <div class="row">
      <div class="col-md-6">
        <h2>Drag & Drop components</h2>
        <hr/>
        <tab-manage :formList="formList"></tab-manage>
      </div>

      <div class="col-md-6">
        <div class="clearfix">
          <h2>Your Form</h2>
          <hr>
          <div id="build" ref="build">
            <form id="target" class="form-horizontal">
              <fieldset>
                <div class="component"
                     data-title="Form Name"
                     data-trigger="manual"
                     data-html="true"
                ><!-- Form Name -->
                  <legend>Form Name</legend>
                </div>
                <draggable class="dragArea" v-model="formList" :options="formOptions" @end="onEndRemove" @add="onAdd">
                    <div v-for="(element, index) in formList" :key="index" style="margin-top: 10px;">
                      <text-input v-if="element.type === 1" :element="element" :isEditable="true" :formList="formList" :index="index"></text-input>
                      <password-input v-if="element.type === 2" :element="element" :isEditable="true" :formList="formList" :index="index"></password-input>
                      <prepended-text v-if="element.type === 3" :element="element" :isEditable="true" :formList="formList" :index="index"></prepended-text>
                      <file-button v-if="element.type === 21" :element="element" :isEditable="true" :formList="formList" :index="index"></file-button>
                      <single-button v-if="element.type === 22" :element="element" :isEditable="true" :formList="formList" :index="index"></single-button>
                    </div>
                </draggable>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import TextInput from '@/components/field_components/form_input/TextInput'
import PasswordInput from '@/components/field_components/form_input/PasswordInput'
import PrependedText from '@/components/field_components/form_input/PrependedText'
import FileButton from '@/components/field_components/buttons/FileButton'
import SingleButton from '@/components/field_components/buttons/SingleButton'
import TabManage from '@/components/tab_manage/TabManage'

export default {
  name: 'FormBuilder',
  components: {
    TextInput,
    PasswordInput,
    PrependedText,
    FileButton,
    SingleButton,
    draggable,
    TabManage
  },
  data () {
    return {
      editable: true,
      formList: []
    }
  },
  computed: {
    formOptions () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: true,
          put: true
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.formList, null, 2)
    },
    ...mapState({
      formInputList: state => state.formInputList,
      buttonList: state => state.buttonList
    })
  },
  methods: {
    onEndRemove (evt) {
      console.log(evt)
      var newIndex = evt.newIndex
      var oldIndex = evt.oldIndex

      if (newIndex === oldIndex) {
        this.formList.splice(newIndex, 1)
      }

      this.isDragging = false
    },
    onAdd (evt) {
      var newIndex = evt.newIndex
      var oldIndex = evt.oldIndex
      if (evt.from.className === 'list-group input-form-tab') {
        var oldInputFormElement = this.formInputList[oldIndex]
        var newInputFormElement = JSON.parse(JSON.stringify(oldInputFormElement))

        this.formList.splice(newIndex, 1, newInputFormElement)
      } else if (evt.from.className === 'list-group button-tab') {
        var oldButtonElement = this.buttonList[oldIndex]
        var newButtonElement = JSON.parse(JSON.stringify(oldButtonElement))
        this.formList.splice(newIndex, 1, newButtonElement)
      }
    }
  },
  watch: {
    formList (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>
