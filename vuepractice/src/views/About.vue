<template>
  <div class='about'>
     <el-button type='text' @click='dialogFormVisible=true'>打开嵌套表单的Dialog</el-button>
     <!-- <taskeditDialog :dialogFormVisible="dialogFormVisible" :title='formTit'></taskeditDialog> -->
     <edit-dialog></edit-dialog>
  </div>
</template>
<script>
// import {taskeditDialog} from './components/taskeditDialog'
// import editDialog from './components/com-dialog'
// import editDialog from "./components/com-dialog";
export default {
  name: "about",
  data() {
    return {
      name: '',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      formTit:'所属案件：晚安'
    }
  },
  components: {
    // taskeditDialog,
    editDialog
  },
  mounted() {
    this.test();
  },
  methods:{
    test(){
      let one = 1, two = 2, three = 3;
      console.log(one && two);
    }
  }
}
</script>
<style lang="less" scoped>
.ivu-select-dropdown{
  background:red!important;
}
</style>
