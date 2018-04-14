<template>
  <draggable class="list-group button-tab" v-model="buttonList" :options="buttonOptions" @start="isDragging=true" @end="isDragging=false">
    <div v-for="(element, index) in buttonList" :key="index">
      <file-button v-if="element.type === 21" :element="element" :isEditable="false" :formList="formList" :index="index"></file-button>
      <single-button v-if="element.type === 22" :element="element" :isEditable="false" :formList="formList" :index="index"></single-button>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import FileButton from '../../field_components/buttons/FileButton'
import SingleButton from '../../field_components/buttons/SingleButton'

export default {
  name: 'ButtonTab',
  components: {
    FileButton,
    SingleButton,
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
    buttonOptions () {
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
      buttonList: state => state.buttonList
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
