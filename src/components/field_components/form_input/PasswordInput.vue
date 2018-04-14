<template>
  <div class="component"><!-- Password input-->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName }}</label>
      <div :class="element.data.size">
        <input :id="element.data.id"
               :name="element.data.id"
               type="password"
               :placeholder="element.data.placeholder"
               class="form-control input-md"
        >
        <!--<input name="passwordinput" type="password" placeholder="placeholder" class="form-control input-md">-->
        <span class="help-block">{{ element.data.helpText }}</span>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="Password Input" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <text-input-property :element="element" ref="editPasswordInputProperty"></text-input-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TextInputProperty from '../../edit_property_form/input/TextInputProperty'

export default {
  name: 'PasswordInput',
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  components: {
    TextInputProperty
  },
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
      this.$refs['editPasswordInputProperty'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editPasswordInputProperty'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
