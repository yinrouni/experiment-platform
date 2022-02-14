<template>
<div>
      <Intro id="page1" class="item-content"/>
</div>
</template>

<script>
import Intro from './Intro'
export default {
  components: {Intro}
  // data () {
  //   return {
  //     // activeIndex: '1',
  //     // arrDom: [],
  //     // headerFixed: false
  //   }
  // },
  // mounted () {
  //   this.arrDom = document.getElementsByClassName('item-content')
  //   window.addEventListener('scroll', this.handleScroll)
  // },

  // destroyed () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  // methods: {
  //   handleScroll () {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //     for (let i = 0; i < this.arrDom.length; i++) {
  //       if (this.arrDom[this.arrDom.length - 1].offsetTop - scrollTop > 760) {
  //         if (this.arrDom[i].offsetTop - scrollTop <= 760 && this.arrDom[i + 1].offsetTop - scrollTop > 760) {
  //           this.activeIndex = (i + 1) + ''
  //         }
  //       } else {
  //         this.activeIndex = this.arrDom.length + ''
  //       }
  //     }
  //   },
  //   handleSelect (key, keyPath) {
  //     this.activeIndex = key
  //     let pageId = document.querySelector('#page' + key)
  //     let nav = document.getElementById('nav-container')
  //     window.scrollTo({
  //       'top': pageId.offsetTop - nav.offsetHeight,
  //       'behavior': 'smooth'
  //     })
  // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu{
  float: right;
  }
  #nav-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 5;
  }
</style>
