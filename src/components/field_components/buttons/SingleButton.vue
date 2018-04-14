<template>
  <div class="component"><!-- Button -->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName }}</label>
      <div class="col-md-4">
        <button id="singlebutton"
                name="singlebutton"
                :class="'btn ' + element.data.buttonType"
                :disabled="isEditable"
        >{{ element.data.buttonText }}</button>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="File Button" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <single-button-property :element="element" ref="editSingleButtonProperty"></single-button-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SingleButtonProperty from '../../edit_property_form/button/SingleButtonProperty'

export default {
  name: 'SingleButton',
  components: {
    SingleButtonProperty
  },
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  data () {
    return {
      dialogFormEditVisible: false
    }
  },
  methods: {
    openDialog () {
      if (this.isEditable) {
        this.dialogFormEditVisible = true
      }
    },
    closeDialog () {
      this.$refs['editSingleButtonProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editSingleButtonProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
