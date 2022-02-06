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
    肝肾：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="肝病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="肾脏疾病"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="无" v-model="filled"></el-checkbox>
      </el-col>
       
    </el-row>
    
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    内分泌：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="甲状腺机能异常"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="肾上腺皮质功能异常"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="糖尿病"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无" v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    骨病：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="炎症"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="肿瘤或囊肿"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="骨质疏松"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="无" v-model="filled"></el-checkbox>
         </el-col>
       
    </el-row>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="3">
    传染病：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="无"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="TB"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="AIDS"></el-checkbox>
      </el-col>
    </el-row>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="3">
    特殊时期：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="否"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="月经期"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="妊娠期"></el-checkbox>
      </el-col>  
    </el-row>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="3">
    拔牙史：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="否"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="1年以内"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="1~3年"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="3年以上"></el-checkbox>
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
    <el-checkbox label="无"  v-model="filled"></el-checkbox>
      </el-col>
         <el-col :span="8">
    <el-checkbox label="有"></el-checkbox>
         </el-col>
           <el-col :span="8">
    <el-checkbox label="如果有，请选择"></el-checkbox>
      </el-col>
    </el-row>
       <el-row>
      <el-col :span="12">
    <el-checkbox label="青霉素过敏（阿莫西林、头孢等）"></el-checkbox>
      </el-col>
         <el-col :span="12">
    <el-checkbox label="有麻醉药过敏:____________"></el-checkbox>
         </el-col>
    </el-row>
        <el-row>
      <el-col :span="12">
    <el-checkbox label="食物过敏:___________"></el-checkbox>
      </el-col>
         <el-col :span="12">
    <el-checkbox label="其他过敏:____________" ></el-checkbox>
         </el-col>
    </el-row>
    
  </el-col>
</el-row>

<el-row>
  <el-col :span="3">
    习惯：
  </el-col>
  <el-col :span="21">
    <el-row>
      <el-col :span="6">
    <el-checkbox label="吸烟习惯"></el-checkbox>
      </el-col>
         <el-col :span="6">
    <el-checkbox label="嗜酒习惯"></el-checkbox>
         </el-col>
           <el-col :span="6">
    <el-checkbox label="夜磨牙"></el-checkbox>
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
