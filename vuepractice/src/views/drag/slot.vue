<template>
  <div>
    <com-slot>
      <div slot="content">
        是点击测试的
      </div>
    </com-slot>
  </div>
</template>
<script>
import comSlot from './components/com-slot.vue'
export default {
  components: {
    comSlot
  },
  data () {
    return {

    }
  }
}
</script>

