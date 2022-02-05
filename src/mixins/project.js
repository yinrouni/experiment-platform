export default {
  methods: {
    redirect: function (url) {
      window.open(url, 'blank')
    },
    format: function (project, n) {
      return require('../assets/' + project + '/' + n + '.png')
    }
  }
}
