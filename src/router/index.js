import Vue from 'vue'
import Router from 'vue-router'
// import VueDraggable from '@/views/VueDraggable'
import FormBuilder from '@/views/FormBuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form Builder',
      component: FormBuilder
    }
  ]
})
