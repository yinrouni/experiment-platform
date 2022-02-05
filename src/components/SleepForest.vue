<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="block">
        <el-carousel height="500px" :autoplay="false">
          <el-carousel-item v-for="item in 5" :key="item">
            <img :src="format('sleepForest',item)" style="height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col :span="16">
      <h3>Sleep Forest – Healthy Sleep Habit-Building Android App in Java</h3>
      <br/>
      <ul style="text-align: left">
        <li>
          Enabled users to schedule a bedtime, send alarm notifications and tracked phone usage by monitoring
          screen-on time
        </li>
        <br/>
        <li>
          Utilized a accelerometer sensor to detect if a user is awake and offered white noise to improve users’ sleep quality
        </li>
        <br/>
        <li>
          Designed a reward system based on RoomDatabase in which plant different amazing trees by achieving bedtime and
          maintaining enough sleep.
        </li>
      </ul>
      <br/>
      <br/>

      <el-button type="primary" plain @click="redirect('https://github.com/yinrouni/Sleep-Forest')">Github
      </el-button>
    </el-col>
  </el-row>

</template>

<script>
import projectMixin from '../mixins/project'
export default {
  name: 'SleepForest',
  mixins: [projectMixin]
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #e8f2ff;
  }

</style>
