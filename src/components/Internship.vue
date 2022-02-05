<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      INTERNSHIP
      <el-divider/>
    </div>
    <div class="content">
      <el-row :gutter="50">
        <el-col :span="12">
          <el-card class="box-card">
            <div class="clearfix" slot="header">
              <el-row>
                <el-col :span="12">
                  <div style="font-weight: bold">Front End Developer Intern</div>
                  <span class="date"> Jul.2020 - Sep.2020</span></el-col>
                <el-col :span="12">
                  <div class="logo">
                    <img id="tx" src="./../assets/logo/tencent-logo.png"/>
                  </div>
                </el-col>

              </el-row>
            </div>
            <div>
              <ul>
                <li>
                  Participate the XDC(X DevCloud) Project, mainly in charge of the external project management process
                </li>
                <li>
                  Implemented the project creation, initialization and status management, and refactored the structure
                  according to Domain Driven Design
                </li>
                <li>
                  Developed the pages related project using Vue.js and APIs including creation, modification and
                  deletion
                  using Node.js
                </li>

              </ul>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="box-card">
            <div class="clearfix" slot="header">
              <el-row>
                <el-col :span="12">
                  <div style="font-weight: bold">Full Stack Developer Coop</div>
                  <span class="date"> Feb.2020 - Jul.2020</span></el-col>
                <el-col :span="12">
                  <div class="logo">
                    <img id="voda" src="./../assets/logo/voda-logo.png"/>
                  </div>
                </el-col>

              </el-row>
            </div>
            <div>
              <ul>
                <li>
                  Implemented the product demo web page, and visualized the result data from Data Science Team with the
                  help of ArcGIS APIs
                </li>
                <li>
                  Reimplemented the UI using the Semantic UI, and refactored the code improving loading speed by 20%
                </li>
                <li>
                  Developed the QA using Cypress and related APIs using Node.js including with which customers can
                  provide data
                </li>

              </ul>

            </div>
          </el-card>

        </el-col>
      </el-row>

      <el-row :gutter="50">
        <el-col :span="12">
          <el-card class="box-card">
            <div class="clearfix" slot="header">
              <el-row>
                <el-col :span="8">
                  <div style="font-weight: bold">Intern</div>
                  <span class="date"> Dec.2016 – Jun.2017</span></el-col>
                <el-col :span="16">
                  <div class="logo">
                    <span class="company">Sichuan Quanshi Infrared Technology Co., Ltd</span>
                  </div>
                </el-col>

              </el-row>
            </div>
            <div>
              <ul>
                <li>
                  Optimized the algorithms using C by adjusting formula and coefficient to improve the quality of the image in greyscale and clarity for a night-vision device used for driving in the dark
                </li>
              </ul>

            </div>
          </el-card>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Internship'
}
</script>

<style scoped>
  @import "./../assets/style.css";

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    text-align: left;
    margin-bottom: 8%;
  }

  .date {
    font-size: smaller;
  }

  img {
    float: right;
  }

  #tx {
    width: 50%;

  }

  #voda {
    width: 38%;
  }

  li {
    margin: 10px;
  }
  .company{
    font-weight: bold;
    font-size: large;
    float: right;
  }

</style>
