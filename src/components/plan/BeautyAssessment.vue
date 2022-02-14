<template>
  <div>
    <div class="left">
    <el-row>
      <el-col :span="4">
        健康状态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            健康、免疫功能正常
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            免疫功能低下
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row>
      <el-col :span="4">
        吸烟习惯
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            不吸烟
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            少量吸烟（<10支/天）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              大量吸烟（>10支/天）
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
         <el-row>
      <el-col :span="4">
        患者的美学期望
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            低
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="filled">
              高
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        唇线
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            低位
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中位
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="filled">
              高位
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        牙龈生物型
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            低弧线形，厚龈生物型
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中弧线形，中厚龈生物型
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              高弧线型，薄龈生物型
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        牙冠形态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            方圆形
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            尖圆形
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        位点的感染情况
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            无
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            慢性
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              急性
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        邻牙牙槽嵴高度
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            到接触点≤5mm
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            到接触点5.5~6.5mm
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              到接触点≥7mm
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

     <el-row>
      <el-col :span="4">
        邻牙修复状态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            无修复体
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            有修复体
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4">
        缺牙间隙的宽度
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            单颗牙（≥7mm）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            单颗牙（<7mm）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              两颗牙或两颗牙以上
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row>
      <el-col :span="4">
        软组织解剖
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            软组织完整
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            软组织缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row>
      <el-col :span="4">
        牙槽嵴解剖
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled">
            无骨缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            水平向骨缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              垂直向骨缺损
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    </div>

 <br>

    <el-button type="primary" plain @click="fill" v-if="!filled">一键填写</el-button>

    <el-dialog
  :show-close="false"
  title="结论"
  :visible="popBeautyAssessment"
  width="30%">
  <span>该患者美学风险为低风险。</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="close">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
export default {
  name: 'BeautyAssessment',
  props: {popBeautyAssessment: Boolean},
  watch: {
    filled: function () {
      this.$emit('enableNext')
    }
  },

  data () {
    return {
      filled: false,
      showDialog: false
    }
  },
  methods: {
    fill: function () {
      this.filled = true
    },
    next () {
      this.$emit('next')
    },
    close () {
      this.$emit('close')
    }

  }
}
</script>

<style>
  @import "../../assets/style.css";
  .left{
    text-align: left;
  }
.form .el-checkbox__input.is-disabled .el-checkbox__inner{
  background-color: #FFFF;
}
.form .el-checkbox__input.is-disabled+span.el-checkbox__label {
  color: #606266
}
.form .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
  background-color: #409EFF;
  border-color: #409EFF;
}

.form .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
  border-color: white
}
</style>
