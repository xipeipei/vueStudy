<template>
  <div class="about">
     <Select v-model="model1" style="width:200px" class="hahahahah" transfer=true transfer-class-name="aaaa">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      name: "",
      cityList: [
          {
              value: 'New York',
              label: 'New York'
          },
          {
              value: 'London',
              label: 'London'
          },
          {
              value: 'Sydney',
              label: 'Sydney'
          },
          {
              value: 'Ottawa',
              label: 'Ottawa'
          },
          {
              value: 'Paris',
              label: 'Paris'
          },
          {
              value: 'Canberra',
              label: 'Canberra'
          }
      ],
      model1: ''
    }
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
