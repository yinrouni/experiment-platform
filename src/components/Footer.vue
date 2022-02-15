<template>
  <div class='footer'>
    <el-row>
            <el-col :span="12" style="text-align: left;">
               <el-button v-if="subIndex!== 0 && subIndex !== undefined" @click="goPrev" type="primary" plain>
            上一步
          </el-button>
          <span v-else>&nbsp; </span>
            </el-col>
             <el-col :span="12" style="text-align: right;">
                <el-button v-if="nextEnabled" @click="goNext" type="primary" plain>
            {{nextStep}}
          </el-button>
            </el-col>
          </el-row>
  </div>

</template>

<script>
export default {
  name: 'Footer',
  props: {subIndex: {type: Number, default: undefined}, nextEnabled: {type: Boolean, default: true}, maxSubIndex: {type: Number, default: undefined}},
  data () {
    return {
      nextStep: '下一步'
    }
  },
  methods: {
    goNext: function () {
      if (this.subIndex === undefined || this.subIndex === this.maxSubIndex) {
        this.$store.commit('goNext')
      } else {
        this.$emit('goNextSubIndex')
      }
    },
    goPrev: function () {
      this.$emit('goPrevSubIndex')
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
