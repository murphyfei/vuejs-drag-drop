<template>
  <div>
    <!-- Tab links -->
    <div class="tab">
      <button class="tablinks active" @click="openOption($event, 'inputFormTab')">Input</button>
      <button class="tablinks" @click="openOption($event, 'buttonFormTab')">Button</button>
      <!--<button class="tablinks" @click="openOption(event, 'tourEventTrigger')">Tour Trigger</button>-->
      <button class="tablinks" @click="openOption($event, 'render')">Render</button>

    </div>

    <form class="form-horizontal" id="components2" role="form">
      <!-- Tab content -->
      <div id="inputFormTab" class="tabcontent" style="display: block;">
        <input-form-tab
          :formList="formList"
          ref="input-form-tab"
        >
        </input-form-tab>
      </div>
      <!-- End Tab Content -->

      <!-- Tab content -->
      <div id="buttonFormTab" class="tabcontent">
        <button-tab
          :formList="formList"
          ref="button-form-tab"
        >
        </button-tab>
      </div>
      <!-- End Tab Content -->

      <!-- Tab content -->
      <div id="render" class="tabcontent">
        <render-html :formList="formList"></render-html>
      </div>
      <!-- End Tab Content -->

    </form>
  </div>
</template>

<script>
import InputFormTab from './tabs/InputFormTab'
import RenderHtml from './tabs/RenderHtml'
import ButtonTab from './tabs/ButtonTab'

export default {
  name: 'TabManage',
  components: {
    InputFormTab,
    ButtonTab,
    RenderHtml
  },
  props: [
    'formList'
  ],
  methods: {
    // openOption (evt, option) {
    openOption (event, option) {
      // this.formList[0].type = 3
      // Declare all variables
      var i, tabcontent, tablinks

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName('tabcontent')
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName('tablinks')
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '')
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(option).style.display = 'block'
      // document.getElementById(option).style.backgroundColor = '#ddd'
      // event.currentTarget.className += ' active'
      event.currentTarget.className += ' active'
    },
    saveTour () {
      this.$refs['tour-info'].updateTour()
    }
  }
}
</script>
