<template>
  <div class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div> -->
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <div class="main-containercontainer">
      <navbar></navbar>
      <!-- <tags-view></tags-view>
      <app-main></app-main> -->
    </div>
  </div>
</template>

<script>
import { Navbar} from './components'

export default {
  name: 'layout',
  components: {
    Navbar
  },
  // mixins: [ResizeMixin],
  computed: {
    // sidebar() {
    //   return this.$store.state.app.sidebar
    // },
    // device() {
    //   return this.$store.state.app.device
    // },
    // classObj() {
    //   return {
    //     hideSidebar: !this.sidebar.opened,
    //     withoutAnimation: this.sidebar.withoutAnimation,
    //     mobile: this.device === 'mobile'
    //   }
    // }
  },
  mounted(){
    // let json1 = {a:1, b:null}
    // console.log(Object.assign({a:2,b:3},json1))
    // let result = Object.assign({ position: '新西兰' }, null, undefined, { name: '张三' });
    // console.log(result)
    const cars = [
      { model: 'renault', year: 1956 },
      { model: 'peugeot', year: 1968 },
      { model: 'ford', year: 1977 }
    ];
    const checkEveryModel = (model) => {
      return cars.every(car => car.model === model);
    }
    // const checkEveryModel = (model) => {
    //   return cars.find(car => car.model !== model) === undefined;
    // }
    console.log(checkEveryModel('renault'));
    console.log(null==undefined)
  },
  methods: {
    // handleClickOutside() {
    //   this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    // }
  }
}
</script>

<style lang="less" scoped>
// @import "@/common/less/base.less";
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
