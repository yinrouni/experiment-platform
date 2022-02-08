<template>
  <el-container style="border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
     <el-menu :default-active="index" @select="select">
        <el-menu-item index=1>
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
        <i class=" el-icon-coordinate"></i>
        <span slot="title">即刻种植手术</span>
     </el-menu-item>

        <el-menu-item index="8">
        <i class="el-icon-bell"></i>
        <span slot="title">术后医嘱</span>
     </el-menu-item>

      <el-menu-item index="9">
        <i class="el-icon-circle-check"></i>
        <span slot="title">评分</span>
     </el-menu-item>



       <!-- <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>病例资料</template> -->
        <!-- <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu> --->
      <!-- </el-submenu> -->
      <!-- <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    </el-menu>
  </el-aside>
  <el-container>
    <!-- <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header> -->

    <el-main>

<Profile v-if="index === '1'"/>
<Collect :subIndex="subIndex" v-if="index === '2'" @next="next"/>
<Plan :subIndex="subIndex" v-if="index === '3'" @next="next"/>
<Agreement v-if="index === '4'"/>
<Preparation v-if="index === '5'" />
<Remove v-if="index === '6'" :subIndex="subIndex"/>
<Plant v-if="index === '7'" :subIndex="subIndex" />
<Warnings v-if="index === '8'" :subIndex="subIndex" />

      <!-- <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
    </el-main>
        <el-footer>
          <el-row>
            <el-col :span="12" style="text-align: left;">
               <el-button @click="back">
            返回
          </el-button>
            </el-col>
             <el-col :span="12" style="text-align: right;">
                <el-button @click="next">
            下一步
          </el-button>
            </el-col>
          </el-row>

    </el-footer>
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


export default {
  name: 'Test',
  components: {Profile, Collect, Plan, Agreement, Preparation, Remove, Plant, 
  Warnings},
  data () {
    return {
      index: '7',
      subIndex: 0,
      data: [{
        label: '病例资料'
        // children: [{
        //   label: '二级 1-1',
        //   children: [{
        //     label: '三级 1-1-1'
        //   }]
        // }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    back(){
       this.$data.subIndex --;
      

    },

    next () {
      if (this.$data.index === '2' && this.$data.subIndex < 4) {
        this.$data.subIndex++
        return
      }
        if (this.$data.index === '3' && this.$data.subIndex < 3) {
        this.$data.subIndex++
        return
      }
        if (this.$data.index === '6' && this.$data.subIndex < 5) {
        this.$data.subIndex++
        return
      }

       if (this.$data.index === '7' && this.$data.subIndex < 10) {
        this.$data.subIndex++
        return
      }
        if (this.$data.index === '8' && this.$data.subIndex < 1) {
        this.$data.subIndex++
        return
      }
      this.$data.subIndex = 0
      this.$data.index = '' + (parseInt(this.$data.index) + 1)
    },
    select (data) {
      this.$data.index = data
      console.log(data, this.$data.index)
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
