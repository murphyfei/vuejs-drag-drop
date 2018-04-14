<template>
  <div class="component"><!-- File Button -->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName}}</label>
      <div class="col-md-4">
        <input :id="element.data.id" :name="element.data.id" class="input-file" type="file" disabled>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="File Button" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <file-button-property :element="element" ref="editFileButtonProperty"></file-button-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import FileButtonProperty from '../../edit_property_form/button/FileButtonProperty'

export default {
  name: 'FileButton',
  components: {
    FileButtonProperty
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
      this.$refs['editFileButtonProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editFileButtonProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
