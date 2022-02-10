<template>
  <div>
    <video :src="url" id="mp4" autoplay=true>
  </div>
</template>

<script>
export default {
  props: {fileName: String},
  name: 'Video',
  computed: {
    url: function () {
      return this.getUrl(this.fileName)
    }
  },

  mounted () {
    const target = document.getElementById('mp4')
    const loading = this.$loading({
      target,
      fullscreen: false,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
      loading.close()
    }, 2000)
  },
  methods: {
    getUrl (fileName) {
      return require('./../assets/' + fileName)
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
