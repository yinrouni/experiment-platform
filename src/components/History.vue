<template>
<div class="left">
  <el-row>
  <el-col :span="24">全身情况（系统性疾病史及精神心理疾病）</el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无"  v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病" v-model="filled"></el-checkbox>
      </el-col>
       
    </el-row>
    
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无" v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无" v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
    </el-row>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>  
    </el-row>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    过敏史：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="8">
    <el-checkbox label="心脏病"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="8">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="8">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
    </el-row>
       <el-row>
      <el-col :span="12">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="12">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="12">
    <el-checkbox label="血压（高、低）" ></el-checkbox>
         </el-col>
    </el-row>
    
  </el-col>
</el-row>

<el-row>
  <el-col :span="3">
    心血管：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="心脏病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="血压（高、低）"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="血液疾病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无"  v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="24">有无其他情况说明：
    <el-input/>
  </el-col>
</el-row>
<br>

<el-row>
  <el-col :span="24" style="text-align: center;">
  <el-button type="primary" plain @click="fill">填写</el-button>
  </el-col>
</el-row>
</div>

</template>

<script>
export default {
  name: 'History',
  data(){
    return {
      filled: false
    }
  },
  methods: {
    fill: function(){
      this.$data.filled = true
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";
 .left{
   text-align: left;
 }

</style>
