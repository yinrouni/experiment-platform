<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-table>
        </el-table>

      </el-col>

      <el-col :span="12">

      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {

  },
  methods: {

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
