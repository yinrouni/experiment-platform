<template>
  <el-container style="border: 1px solid #eee">
  <el-aside width="200px">
     <el-menu :default-active="index" @select="select">
        <el-menu-item index="1">
        <i class="el-icon-message"></i>
        <span slot="title">病例资料</span>
     </el-menu-item>
     <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span slot="title">病史采集</span>
     </el-menu-item>
     <el-menu-item index="3">
        <i class="el-icon-tickets"></i>
        <span slot="title">方案商议</span>
     </el-menu-item>
        <el-menu-item index="4">
        <i class="el-icon-document-checked"></i>
        <span slot="title">知情同意</span>
     </el-menu-item>
        <el-menu-item index="5">
        <i class="el-icon-suitcase"></i>
        <span slot="title">术前准备</span>
     </el-menu-item>

        <el-menu-item index="6">
        <i class="el-icon-monitor"></i>
        <span slot="title">牙拔除术</span>
     </el-menu-item>

        <el-menu-item index="7">
        <i class="el-icon-coordinate"></i>
        <span slot="title" >即刻种植</span>
     </el-menu-item>

        <el-menu-item index="8">
        <i class="el-icon-bell"></i>
        <span slot="title">术后医嘱</span>
     </el-menu-item>

      <el-menu-item index="9">
        <i class="el-icon-circle-check"></i>
        <span slot="title">评分</span>
     </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-main>
<Profile v-if="index === '1'"/>

<Collect :subIndex="subIndex" v-show="index === '2'" @next="next"/>
<Plan :subIndex="subIndex" v-show="index === '3'" @next="next"/>
<Agreement v-show="index === '4'"/>
<Preparation v-show="index === '5'" />
<Remove v-show="index === '6'" :subIndex="subIndex"/>
<Plant v-show="index === '7'" :subIndex="subIndex" />
<Warnings v-show="index === '8'" :subIndex="subIndex" />
<Result v-show="index === '9'" />
    </el-main>
        <!-- <el-footer>
          <el-row>
            <el-col :span="12" style="text-align: left;">
               <el-button @click="back" v-if="['1', '4', '5'].indexOf(index) < 0 && subIndex !==0">
            上一步
          </el-button>
          <span v-else>&nbsp; </span>
            </el-col>
             <el-col :span="12" style="text-align: right;">
                <el-button @click="next" v-if="$store.state.nextEnabled">
            {{nextStep}}
          </el-button>
            </el-col>
          </el-row>

    </el-footer> -->
  </el-container>
</el-container>
</template>

<script>
import Collect from './Collect'
import Profile from './Profile'
import Plan from './Plan'
import Agreement from './Agreement'
import Preparation from './Preparation'
import Remove from './Remove'
import Plant from './Plant'
import Warnings from './Warnings'
import Result from './Result'

export default {
  name: 'Test',
  components: {Profile,
    Collect,
    Plan,
    Agreement,
    Preparation,
    Remove,
    Plant,
    Result,
    Warnings},
  watch: {
    index: function (val) {
      if (val === '9') {
        this.nextStep = '重新测试'
      } else {
        this.nextStep = '下一步'
      }
    }
  },
  mounted() {
    this.index  = '1'
    this.$store.commit('reset')
  },
  computed: {
    index: {
      get: function () {
        return this.$store.state.currentIndex
      },
      set: function (val) {
        this.$store.commit('goNext', val)
      }
    }
  },
  data () {
    return {
      // index: '1',
      subIndex: 0,
      nextStep: '下一步'
    }
  },
  methods: {
    back () {
      this.subIndex--
    },

    next () {
      this.$store.commit('next')
      if (this.index === '2' && this.subIndex < 4) {
        this.subIndex++
        return
      }
      if (this.index === '3' && this.subIndex < 2) {
        this.subIndex++
        return
      }
      if (this.index === '6' && this.subIndex < 5) {
        this.subIndex++
        return
      }

      if (this.index === '7' && this.subIndex < 10) {
        this.subIndex++
        return
      }
      if (this.index === '8' && this.subIndex < 1) {
        this.subIndex++
        return
      }
      if (this.index === '9') {
        this.$router.push('/')
        this.$store.commit('reset')
        return
      }
      this.subIndex = 0
      this.index = '' + (parseInt(this.index) + 1)
    },
    select (data) {
      this.index = data
      console.log(data, this.index)
    },
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
