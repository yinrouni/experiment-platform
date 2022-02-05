<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      PROJECTS
      <el-divider/>
    </div>
    <div class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="Sleep Forest" name="first">
            <SleepForest/>
          </el-tab-pane>
          <el-tab-pane label="Popo" name="second">Popo</el-tab-pane>
          <el-tab-pane label="Streamer Survival Guide" name="third">Streamer Survival Guide</el-tab-pane>
          <el-tab-pane label="Image Processor" name="fourth">
            <ImageProcessor />
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>

</template>

<script>
import SleepForest from './SleepForest'
import ImageProcessor from './ImageProcessor'
export default {
  name: 'Projects',
  components: {ImageProcessor, SleepForest},
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";

</style>
