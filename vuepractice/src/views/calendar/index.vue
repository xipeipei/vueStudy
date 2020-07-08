<template>
  <div id="parent">
    <div class="header">
      <div class="left">
        <el-button-group>
          <el-button type="primary" size="mini" @click="prev">&lt;</el-button>
          <el-button type="primary" size="mini" @click="next">&gt;</el-button>
        </el-button-group>
        &nbsp;&nbsp;&nbsp;{{headerContent}}
      </div>
      <div class="right">
        <el-button-group>
          <el-button type="primary" size="mini" @click="switchMonth">月</el-button>
          <el-button type="primary" size="mini" @click="switchWeek">周</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="body">
      <div class="month-table"  cellspacing="0" cellpadding="0" v-show="showMonth">
        <thead>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </thead>
        <div class="body">
          <!-- 双重for循环生成 6 * 7 = 42 个日期格子 -->
          <div class="weekDay" v-for="(week, weekIndex) in dates" v-bind:key="weekIndex">
            <div class="dayItem" v-for="(date, dateIndex) in dates[weekIndex]"
              v-bind:key="dateIndex"
              @mouseenter="dateMouseEnter(weekIndex, dateIndex)"
              @mouseleave="dateMouseLeave(weekIndex, dateIndex)">
              <div
              class="date"
              :class="[date.class, date.isAlive]">
                <span>{{date.day}}</span>
              </div>
            </div>
            <div v-if="week.offsetL" :class="`scheduleItem offsetL${week.offsetL} spanLen${week.spanLen}`">
              sdcsdcds
            </div>
          </div>
        </div>
      </div>
      <!-- 生成一个周 时间列表 -->
      <table class="week-table"  cellspacing="0" cellpadding="0" v-show="!showMonth">
        <thead>
          <th></th>
          <th v-for="(header, index) in weekTableHeader" v-bind:key="index" :class="header.class">{{header.date}}</th>
        </thead>
        <tbody>
          <tr v-for="(hourMinute, index) in weekList[0]" v-bind:key="index">
            <td>
              <div class="hours">
                <span>{{hourMinute}}</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
 
<script>
import moment from 'moment'
export default {
  data () {
    return {
      today: moment().format('YYYY-MM-DD'),
      currentYearMonth: moment().format('YYYY-MM'),
      weekTableHeader: [],
      dates: [],
      showMonth: true,
      weekList: [],
      headerContent: moment().format('YYYY-MM'),
      currentWeekday: '',
      dateArr: []
    }
  },
  mounted () {
  },
  methods: {
    // 点击上个月 通过改变currentYearMonth来获取上个月的 YYYY-MM 格式
    prev () {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth).subtract(1, 'months').format('YYYY-MM')
        this.headerContent = this.currentYearMonth
        this.createCalendar()
      } else {
        this.currentWeekday = moment(this.currentWeekday).subtract(7, 'days')
        this.weekHeaderContent()
        this.createWeekList()
      }
    },
    next () {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth).add(1, 'months').format('YYYY-MM')
        this.headerContent = this.currentYearMonth
        this.createCalendar()
      } else {
        this.currentWeekday = moment(this.currentWeekday).add(7, 'days')
        this.weekHeaderContent()
        this.createWeekList()
      }
    },
    switchMonth () {
      this.showMonth = true
      this.headerContent = this.currentYearMonth
    },
    switchWeek () {
      this.showMonth = false
      this.weekHeaderContent()
    },
    dateMouseEnter (weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = 'date-alive'
    },
    dateMouseLeave (weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = ''
    },
    createCalendar () {
      this.dates = []
      this.dateArr = []
      // 获取当月的一号是星期几 以便来生成上月的日期 填补够42个格子
      const monthFirstDay = moment(this.currentYearMonth + '-01', 'YYYY-MM-DD')
      // 获得一号与第一个格子内应该有的天数距离 这里需要注意的是 weekday 是从周日 为 0 开始的
      let firstDayWeekday = moment(monthFirstDay).weekday()
      if (firstDayWeekday === 0) {
        firstDayWeekday = 7
      }
      console.log(firstDayWeekday)
      let daysDistance = 1 - firstDayWeekday
      for (let weeks = 0; weeks < 6; weeks++) {
        this.dates.push([])
        this.dateArr.push([])
        for (let weekday = 0; weekday < 7; weekday++) {
          // 该对象有两个属性 一个是class属性 还有一个就是日期
          let date = {}
          date.day = moment(monthFirstDay).add(daysDistance, 'days')
          date.isAlive = ''
          const dayMonth = moment(date.day).month()
          // 是这个月的日期
          if (dayMonth === moment(monthFirstDay).month()) {
            date.class = 'current-month '
            // 日期是今天的高亮
            if (moment(date.day).isSame(this.today, 'days')) {
              date.class += 'today '
            }
          } else {
            date.class = 'not-current-month '
          }
          // console.log(moment(date.day).format('YYYY-MM-DD'))
          // 判断本周的周日是几号
          
          if (weekday === 6) {
            // let dateArr = []
            // dateArr.push([])
            // dateArr[weeks].push(moment(date.day).format('YYYY-MM-DD'))
            // console.log(date.day)
            // console.log(moment(date.day).format('YYYY-MM-DD'))
            // console.log(11111)
            let json = require('./mock.json')
            // console.log(dateArr)
          }
          console.log(moment(date.day).format('YYYY-MM-DD'))
          // console.log(weeks)
          // let dateArr = []
          //   // dateArr.push([])
          //   dateArr[weeks].push(moment(date.day).format('YYYY-MM-DD'))
          //   console.log(dateArr)
            // this.dateArr[weeks].push(moment(date.day).format('YYYY-MM-DD'))
            // console.log(this.dateArr)
          date.date = moment(date.day).format('YYYY-MM-DD')
          date.day = moment(date.day).format('DD')
          
          this.dates[weeks].push(date)
          daysDistance++
        }
      }
      let json = require('./mock.json')
      console.log(this.dates)
      for (let i in this.dates) {
        this.dates[i].forEach((day) => {
          json.forEach((item) => {
            if (moment(moment(item.start).format('YYYY-MM-DD')).isSame(day.date) && !moment(moment(item.end).format('YYYY-MM-DD')).isSame(day.date)) {
              this.dates[i].offsetL = parseInt(i) + 1
              console.log(moment(moment(item.end).format('YYYY-MM-DD')).diff(moment(moment(item.start).format('YYYY-MM-DD')), 'days'))
              let getDiff = moment(moment(item.end).format('YYYY-MM-DD')).diff(moment(moment(item.start).format('YYYY-MM-DD')), 'days')
              this.dates[i].spanLen = getDiff > 7 - (parseInt(i) + 1) ? 7 - (parseInt(i) + 1) : getDiff
            }
            if (moment(moment(item.end).format('YYYY-MM-DD')).isSame(day.date) && !moment(moment(item.start).format('YYYY-MM-DD')).isSame(day.date)) {
              this.dates[i].offsetL = parseInt(i) + 1
              console.log(moment(moment(item.end).format('YYYY-MM-DD')).diff(moment(this.dates[i][0].date), 'days'))
              let getDiff = moment(moment(item.end).format('YYYY-MM-DD')).diff(moment(moment(this.dates[i][0].date).format('YYYY-MM-DD')), 'days')
              this.dates[i].spanLen = getDiff > 7 ? 7 : getDiff
            }
          })
        })
      }
      console.log(this.dates)
    },
    createWeekList () {
      this.weekTableHeader = ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat ', 'Sun ']
      this.weekList = []
      for (let index = 0; index < 7; index++) {
        let item = {}
        item.date = moment(this.currentWeekday).add(index, 'days')
        if (item.date.isSame(this.today, 'days')) {
          item.class = 'today'
        }
        item.date = this.weekTableHeader[index] + item.date.format('MM/DD')
        this.weekTableHeader[index] = item
      }
      for (let days = 0; days < 7; days++) {
        this.weekList.push([])
        let item = ''
        for (let hours = 0; hours < 48; hours++) {
          if (hours % 2 === 0) {
            item = hours / 2 + '点'
          } else {
            item = ''
          }
          this.weekList[days].push(item)
        }
      }
    },
    weekHeaderContent () {
      this.headerContent = moment(this.currentWeekday).format('MM/DD') + '~' + moment(this.currentWeekday).add(6, 'days').format('MM/DD')
    }
  },
  created () {
    // v-show是在创建后 保留dom 只是做切换的 不会v-if那样 销毁dom 所以只需要创建一次
    this.createCalendar()
    let weekday = moment().weekday() === 0 ? 7 : moment().weekday()
    let daysDistance = 1 - weekday
    this.currentWeekday = moment().add(daysDistance, 'days')
    this.createWeekList()
  }
}
</script>
 
<style lang="less" scoped>
.scheduleItem{
  position: absolute;
  border-radius: .5em;
  height:20px;
  top:20px;
  background: lightblue;
  &.offsetL1{
    left:14.3%;;
  }
  &.offsetL2{
    left:28.6%;
  }
  &.offsetL3{
    left:42.9%;
  }
  &.offsetL4{
    left:57.1%;
  }
  &.offsetL5{
    left:71.4%;
  }
  &.offsetL6{
    left:85.7%;
  }
  &.spanLen1{
    width:14.3%;;
  }
  &.spanLen2{
    width:28.6%;
  }
  &.spanLen3{
    width:42.9%;
  }
  &.spanLen4{
    width:57.1%;
  }
  &.spanLen5{
    width:71.4%;
  }
  &.spanLen6{
    width:85.7%;
  }
}
.body{
  .weekDay{
    width: 100%;
    display: -webkit-box;
    position: relative;
  }
  .dayItem{
    -webkit-box-flex: 1;
  }
}
#parent {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ebeef5;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ebeef5;
}
.body {
  padding: 12px 20px 35px;
}
table {
  table-layout: fixed;
  width: 100%;
}
table thead th {
  padding: 10px 0;
  font-weight: 400;
}
tbody tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  position: relative;
}
.month-table tbody td {
  vertical-align: inherit;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.month-table tbody tr:first-child td {
  border-top: 1px solid #ebeef5;
}
.month-table tr td:first-child {
  border-left: 1px solid #ebeef5;
}
.date {
  box-sizing: border-box;
  padding: 8px;
  height: 84px;
}
.not-current-month {
  color: #909399;
}
.current-month {
  color: #000000;
}
.today {
  color: #F44E50;
  // background-color: #;
}
.date-alive {
  background-color: rgb(252, 212, 215);
}
.week-table tbody tr td {
  border: 1px solid #ebeef5;
}
.hours{
  text-align: center;
  height: 24px;
}
</style>

