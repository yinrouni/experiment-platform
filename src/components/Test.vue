<template>
  <el-container style="border: 1px solid #eee">
  <el-aside width="200px">
    <div class="menu">
     <el-menu :default-active="index" @select="select" :background-color="'#fafafa'" :active-text-color="'#409EFF'">
        <el-menu-item index="1">
        <i class="el-icon-message"></i>
        <span slot="title" class="tab">病例资料</span>
     </el-menu-item>
     <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span slot="title" class="tab">病史采集</span>
     </el-menu-item>
     <el-menu-item index="3">
        <i class="el-icon-tickets"></i>
        <span slot="title" class="tab">方案商议</span>
     </el-menu-item>
        <el-menu-item index="4">
        <i class="el-icon-document-checked"></i>
        <span slot="title" class="tab">知情同意</span>
     </el-menu-item>
        <el-menu-item index="5">
        <i class="el-icon-suitcase"></i>
        <span slot="title" class="tab">术前准备</span>
     </el-menu-item>

        <el-menu-item index="6">
        <i class="el-icon-monitor"></i>
        <span slot="title" class="tab">牙拔除术</span>
     </el-menu-item>

        <el-menu-item index="7">
        <i class="el-icon-coordinate"></i>
        <span slot="title" class="tab" >即刻种植</span>
     </el-menu-item>

        <el-menu-item index="8">
        <i class="el-icon-bell"></i>
        <span slot="title" class="tab">术后医嘱</span>
     </el-menu-item>

      <el-menu-item index="9">
        <i class="el-icon-circle-check"></i>
        <span slot="title" class="tab">评分</span>
     </el-menu-item>
    </el-menu>
    </div>
  </el-aside>
  <el-container>
    <el-main>
<Profile v-if="index === '1'"/>

<Collect v-show="index === '2'" />
<Plan v-show="index === '3'"/>
<Agreement v-show="index === '4'"/>
<Preparation v-show="index === '5'" />
<Remove v-show="index === '6'" />
<Plant v-show="index === '7'" />
<Warnings v-show="index === '8'"  />
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
  .tab{
    font-size: 16px;
    font-weight: 450;
  }

  .el-menu-item:hover {
	background: #ecf5ff !important;
}
  .el-menu-item.is-active{
      border-right: #409EFF solid 4px;
      	background: #ecf5ff !important;
  }

.el-aside{
  background: #fafafa
}
</style>
