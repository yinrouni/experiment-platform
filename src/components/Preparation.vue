<template>
<div>
  <div class="type">
<h3>
  术前准备
</h3>
  </div>
<el-row>
  <el-col :span="12">
    <div class="type">
    <span>
      单选题
    </span>
<br>
<div v-for="(question, index) in questions" :key="index">
<br>
    <div>
      <div>
        {{index +1}}.{{question.q}}
      </div>
      <div>
        <el-radio-group v-model="keys[question.id]">

        <el-radio  v-for="(option, indexA) in question.a" :label="indexA" :key="option">
          <span>{{option}}
            <i v-if="indexA === question.k && indexA === keys[question.id]"
            class="el-icon-circle-check right" />
            <i  v-if="indexA !== question.k && indexA === keys[question.id]" class="el-icon-circle-close wrong" />

          </span>
        </el-radio>
        </el-radio-group>
      </div>
    </div>
</div>

    </div>
  </el-col>

  <el-col :span="12">
    <div class="type">
    <span >
      多选题
      </span>
      <br>
    <br>
     <div>
      <div>
        4.请选择本方案所需全部器械：
      </div>
      <div>
         <el-checkbox-group v-model="four">
        <el-checkbox  v-for="(item, index) in tools.split(' ')" :label="item" :key="index">
        </el-checkbox>
         </el-checkbox-group>
      </div>
    </div>
    </div>

  </el-col>

</el-row>

</div>

</template>

<script>
export default {
  name: 'Preparation',
  data () {
    return {
      oneChoice: [],
      tools: '一次性器械盒 金属注射器 牙龈分离器 牙钳 微创拔牙手术盒 种植体 种植工具盒 扫描杆 临时修复基台',
      keys: {
        one: undefined,
        two: undefined,
        three: undefined
      },
      four: [],
      questions: [
        {
          id: 'one',
          q: '术前（ ）周进行牙周洁治',
          a: ['A.1-2天', 'B.6-7天', 'C.6-7周', 'D.2-3周'],
          k: 3
        },
        {
          id: 'two',
          q: '对该患者患牙21，最适麻醉方式应选择 ( )',
          a: ['A．浸润麻醉', 'B．表面麻醉', 'C．阻滞麻醉', 'D．冷冻麻醉'],
          k: 0
        },
        {
          id: 'three',
          q: '麻醉药物最佳选择为 ( )',
          a: ['A．碧蓝麻', 'B．甲哌卡因', 'C．丁卡因', 'D．普鲁卡因'],
          k: 0
        }

      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .type{
    text-align: left;
  }

</style>
