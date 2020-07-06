<template>
  <div class="wrap">
    <p style="padding:20px;">drag</p>
    <draggable
      :list="infoLabels"
      :options="{group:{name: 'dragRight',pull:'clone',put: false},sort:true}"
      @start="startDrag"
      class="dragArea-left">
        <div v-for="(item,index) in infoLabels" :key="index" class="labelItem">
          <p><span>{{item.label}}</span></p>
        </div>
    </draggable>
    <!-- right -->
    <draggable
      :list="fieldList"
      :options="{group:'dragRight', disabled: false,sort:true}"
      @add="onAddFun($event)"
      class="dragArea-right">
        <div v-for="(item,index) in fieldList" :key="index" class="labelItem">
          <el-input v-if="item.type==1"></el-input>
          <div v-if="item.type==2">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </div>
          <div v-if="item.type==3">
            <el-checkbox v-model="checked">备选项</el-checkbox>
          </div>
          <el-date-picker
            v-if="item.type==4"
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
    </draggable>
    <slotItem></slotItem>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import slotItem from './slot.vue'
export default {
  name: 'dragArea',
  components: {
    draggable,
    slotItem
  },
  data () {
    return {
      infoLabels: [
        { value: 1, label: '文本'},
        { value: 2, label: '单选'},
        { value: 3, label: '多选'},
        { value: 4, label: '日期'}
      ],
      list: [1,2,3,4,5,6],
      isDragDisabled: false,
      fieldList: [],
      radio:'1',
      checked:true,
      value1:''
    }
  },
  methods: {
    startDrag () {
      this.isDragDisabled = true
    },
    // 加入右侧列表
    onAddFun (ev) {
      console.log(ev)
      console.log(ev.oldIndex)
      this.isDragDisabled = false
      let typeValue = this.infoLabels[ev.oldIndex].value
      let obj = { type: typeValue }
      this.fieldList.push(obj)
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
  width:1200px;
  height:800px;
  background:#fff;
}
.dragArea-left{
  width:400px;
  height:600px;
  float: left;
  margin-left:16px;
  .labelItem{
    float: left;
    width:160px;
    height:40px;
    border-radius:26px;
    margin-top:16px;
    margin-left:16px;
    border:1px solid rgba(45,114,224,1);
    color:#2D72E0;
    line-height:40px;
    text-align: center;
    cursor: grab;
  }
  box-shadow: 0px 3px 12px 0px rgba(27, 34, 86, 0.16)
}
.dragArea-right{
  width:400px;
  height:600px;
  float: left;
  margin-left:25px;
  box-shadow: 0px 3px 12px 0px rgba(27, 34, 86, 0.16);
  padding:0 16px;
  .labelItem{
    margin-top:16px;
  }
}
.dragArea {
  display: none;
  width:900px;
  height:60px;
  box-shadow: 0px 3px 12px 0px rgba(27, 34, 86, 0.16);
  border-radius:5px;
  margin-left:16px;
  margin-bottom:30px;
  .labelItem{
    float: left;
    width:60px;
    height:40px;
    border-radius:26px;
    margin-left:16px;
    border:1px solid rgba(45,114,224,1);
    color:#2D72E0;
    line-height:40px;
    text-align: center;
    cursor: grab;
    margin-top:10px;
  }
}
</style>


