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
            <el-checkbox>
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
            <el-checkbox>
            少量吸烟（<10支/天）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
            低
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
            低位
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
            中弧线形，中厚龈生物型
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
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
            <el-checkbox>
            慢性
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
            到接触点5.5~6.5mm
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
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
            <el-checkbox>
            单颗牙（<7mm）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
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
            <el-checkbox>
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
            <el-checkbox>
            水平向骨缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox>
              垂直向骨缺损
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    </div>

 <br>

    <el-button type="primary" plain @click="fill">一键填写</el-button>

    <el-dialog
  title="结论"
  :visible.sync="filled"
  width="30%">
  <span>该患者美学风险为低风险。</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="next">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
export default {
  name: 'BeautyAssessment',
  data () {
    return {filled: false}
  },

  methods: {
    fill: function () {
      this.filled = true
    },
    next () {
      this.$emit('next')
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .left{
    text-align: left;
  }
  .name{
    color: white;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
