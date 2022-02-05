<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      ABOUT
      <el-divider/>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="14">
          <div style="margin:5% 10%">
            <p style="text-align: left">
              I am Rouni Yin, and I’m currently in a Master’s program in Computer Science at Northeastern University.
              I'm seeking for 2021 new grad SDE position.
            </p>
            <p style="text-align: left">
              I always love to communicate and discuss with others on new and exciting challenges. I love investigating
              reasons and causes of problems and searching for improvement. I have always enjoyed working with people
              and
              hoped to have a positive influence.
            </p>

            <p style="text-align: left">
              Prior to the CS program, I was a student majoring in Chemistry working on researches in semi-conductor
              materials. While conducting experiments, I found an effective software is necessary to the success. Some
              even can simulate experiments. I realized the significance that the computer science, software can change
              our life.
            </p>
            <p style="text-align: left">
              I decided to transition to a technical role where I can focus on the software development using my
              analytical and technical skills. This is why I’m seeking for a full-time role in software development
              where I will have more opportunities to solve technical problems with what I’m learning in my program.
            </p>

            <el-button plain type="primary" @click="goResume">
              Resume
            </el-button>
          </div>
        </el-col>

        <el-col :span="10">
          <div style="text-align: left">

            <p class="sub-header">
              Programming Languages
            </p>
            <p>
              Java, JavaScript, Python, C, HTML5, CSS3, Elixir
            </p>
            <br/>
            <p class="sub-header">
              Databases
            </p>
            <p>
              MySQL, PostgresSQL
            </p>

            <br/>
            <p class="sub-header">
              Libraries & Frameworks
            </p>
            <p>
              Vue.js, React.js, Node.js, Bootstrap, SemanticUI React, ElementUI
            </p>

            <br/>
            <p class="sub-header">
              Tools
            </p>
            <p>
              Git, Agile, MATLAB
            </p>
          </div>
        </el-col>

      </el-row>

    </div>
  </div>
</template>

<script>
import projectMixins from '../mixins/project'
export default {
  name: 'About',
  mixins: [projectMixins],
  methods: {
    goResume: function () {
      if (process.env.NODE_ENV === 'production') {
        window.open(`./static/Rouni Yin(resume1).pdf`, 'blank')
      } else {
        window.open(`../../static/Rouni Yin(resume1).pdf`, 'blank')
      }
    }
  }

}
</script>

<style scoped>
  @import "../assets/style.css";

</style>
