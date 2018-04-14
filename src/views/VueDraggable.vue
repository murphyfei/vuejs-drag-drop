<template>
  <div class="fluid container" id="test" ref="test">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortbale control</h3>
      </div>
      <div class="panel-body">
        <div class = "checkbox">
          <label><input type = "checkbox" v-model="editable">Enable drag and drop</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>

    <div  class="col-md-3">
      <draggable class="list-group" element="ul" v-model="list" :options="dragOptionsClone" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in list" :key="element.order">
            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div  class="col-md-3">
      <draggable class="list-group" element="span" v-model="list2" :options="dragOptionsRemove" :move="onMoveRemove" @end="onEndRemove">
        <transition-group name="no" class="list-group" tag="ul">
          <li class="list-group-item" v-for="element in list2" :key="element.order">
            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>

    <div  class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
    <div  class="list-group col-md-3">
      <!-- <pre>{{list2String}}</pre> -->
      <pre>{{list2String}}</pre>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs' ]
// const message2 = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs' ]

export default {
  name: 'VueDraggable',
  components: {
    draggable
  },
  created () {
    // this.test = document.getElementById('test').innerHTML
    console.log(this)
    // this.test = this.$el.test.innerHTML
  },
  data () {
    return {
      list: message.map((name, index) => { return {name, order: index + 1, fixed: false} }),
      // list2: message2.map( (name,index) => {return {name, order: index+1, fixed: false} }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      test: ''
    }
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one, two) => { return one.order - two.order })
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      // return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      // return true
    },
    onMoveRemove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      // return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      console.log(draggedElement)
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      // return true
    },
    onEndRemove (evt) {
      console.log('test', evt)
      this.isDragging = false
    }
  },
  computed: {
    dragOptionsClone () {
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
    dragOptionsRemove () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: 'true',
          put: true
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
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

<style>
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: .5;
    background: #C8EBFB;
  }

  .list-group {
    min-height: 20px;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i{
    cursor: pointer;
  }
</style>
