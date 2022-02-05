<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      <p>EDUCATION</p>
      <el-divider/>
    </div>

    <div class="content">
    <el-timeline>
      <el-timeline-item type="primary" size="large" icon="el-icon-check">
        <el-card class="left">
          <el-row  :gutter="20">
            <el-col :span="12">
              <h3>Northeastern University<span>, Boston, USA</span></h3>
              <p>Khoury College of Computer Sciences</p>
              <p style="font-weight: bold">Candidate for a Master of Science in Computer Science</p>
              <p> Sep. 2018 - Dec. 2020 </p>
            </el-col>
            <el-col :span="12">
              <p> GPA 3.8/4.0</p>
              <p><span style="font-weight: bold">Related Courses:</span> Object-Oriented Design, Database Management System, Discrete Math and Data Structures,
                Algorithms, Web Development, Android App Development, Machine Learning</p>
            </el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
      <el-timeline-item type="primary" size="large">
        <el-card class="left">
          <el-row  :gutter="20">
            <el-col :span="12">
              <h3>University of Electronics Science and Technology of China<span>, Chengdu, China</span></h3>
              <p>School of Microelectronics and Solid State Electronics</p>
              <p style="font-weight: bold">Bachelor of Science in Applied Chemistry</p>
              <p>Sep.2014 – Jul.2018</p>
            </el-col>
            <el-col :span="12">
              <p> GPA 3.9/4.0</p>
              <p><span style="font-weight: bold">Related Courses:</span> Calculus, Linear Algebra,
                Probability Statistics, Programming in C, MATLAB,  Discrete Math</p>
            </el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
      <el-timeline-item type="primary" size="large">
        <el-card class="left">
          <el-row :gutter="20">
            <el-col :span="12">
              <h3>King Abdullah University of Science and Technology<span>, Thuwal, Kingdom of Saudi Arabia</span></h3>
              <p>Sep.2017 - Jan.2018</p>
            </el-col>
            <el-col :span="12">
              <p> Research Assistant</p>
              <p> Research on Metal Catalyst for CO2 Reduction</p>
            </el-col>
          </el-row>

        </el-card>
      </el-timeline-item>
    </el-timeline>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Education'
}
</script>

<style scoped>
  @import "../assets/style.css";
  .content{
    width: 80%;
    margin: auto;
  }
  .content >>> .el-card__body{
    padding:6px 20px;
  }

  h3 span{
    font-weight: normal;
    font-size: small;
  }

</style>
