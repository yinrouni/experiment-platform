<template>
  <div id="mp4">
    <video :src="url" @canplay="play">
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
  data () {
    return {
      loader: null
    }
  },

  mounted () {
    const target = document.getElementById('#mp4')
    const loading = this.$loading({
      target,
      fullscreen: false,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    // setTimeout(() => {
    //   loading.close()
    // }, 2000)

    this.loader = loading
  },
  methods: {
    getUrl (fileName) {
      return require('./../assets/' + fileName)
    },
    play () {
      const v = document.getElementsByTagName('video')[0]

      if (v.readyState >= 3) {
        this.loader.close()
        console.log('video can play')
        v.play()
      }
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
