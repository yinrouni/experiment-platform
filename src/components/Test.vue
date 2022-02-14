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

<Collect :subIndex="subIndex" v-show="index === '2'"/>
<Plan :subIndex="subIndex" v-show="index === '3'"/>
<Agreement v-show="index === '4'"/>
<Preparation v-show="index === '5'" />
<Remove v-show="index === '6'" :subIndex="subIndex"/>
<Plant v-show="index === '7'" :subIndex="subIndex" />
<Warnings v-show="index === '8'" :subIndex="subIndex" />
<Result v-show="index === '9'" />
    </el-main>
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
  mounted () {
    this.index = '1'
    this.$store.commit('reset')
  },
  data () {
    return {
      index: '1',
      subIndex: 0,
      nextStep: '下一步'
    }
  },
  methods: {
    back () {
      this.subIndex--
    },
    select (data) {
      this.index = data
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
