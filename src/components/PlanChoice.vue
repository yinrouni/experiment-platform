<template>
  <el-row>
    <el-col :span="15">
      <video src="https://gw.alipayobjects.com/v/rms_7c9e32/afts/video/A*ArmfSo692bgAAAAAAAAAAAAAARQnAQ/720P"  controls="controls" preload="auto"/>

    </el-col>
     <el-col :span="9">
       <div style="margin-left:30px">
       <h4>
         单选题：
       </h4>
       </div>
       <div>
         <QuestionCard @popRes="popRes"/>
       </div>
       <br>
       <div style="margin-left:30px" v-if="res.length > 0">
    <el-table
      style="width: 95%"
      :data="getValues"
      :show-header="false"
    >
      <el-table-column
        v-for="(item, index) in getHeaders"
        :key="index"
        width="60"
      >
        <template slot-scope="scope">
          <i class="right el-icon-circle-check" v-if="scope.row[item] === true" />
           <i class="wrong el-icon-circle-close" v-if="scope.row[item] === false" />
        <span  v-if="scope.row[item] !== false && scope.row[item] !== true">{{ scope.row[item] }}</span>
      </template>
      </el-table-column>
    </el-table>

       </div>

    </el-col>

  </el-row>

</template>

<script>
import QuestionCard from './QuestionCard'
export default {
  components: {QuestionCard},
  name: 'PlanChoice',

  computed: {
    getHeaders () {
      return this.res.reduce((pre, cur, index) => pre.concat(`value${index}`), ['title'])
    },
    getValues () {
      return this.headers.map(item => {
        return this.res.reduce((pre, cur, index) => Object.assign(pre, {['value' + index]: cur[item.prop]}), {'title': item.label })
      })
    }
  // res(){

  // }
  },
  data () {
    return {
      res: [],
      headers: [
        {
          prop: 'index',
          label: '序号'
        },
        {
          prop: 'isCorrect',
          label: '结果'
        } ]
    }
  },

  methods: {
    enter: function () {
      console.log('to test')
      this.$router.push('/test')
    },
    popRes: function (arg) {
      this.res = arg.map((a, index)=>{return {index: index + 1, isCorrect: a}})
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
video{
  width: 100%;
}

h4{
  text-align: left;

}
</style>
