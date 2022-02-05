<template>
<div>
      <Intro id="page1" class="item-content"/>
</div>
  <!-- <div>
  <div id="nav-container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">INTRO</el-menu-item>
      <el-menu-item index="2">ABOUT</el-menu-item>
      <el-menu-item index="3" >EDUCATION</el-menu-item>
      <el-menu-item index="4">INTERNSHIP</el-menu-item>
      <el-menu-item index="5">PROJECTS</el-menu-item>
      <el-menu-item index="6">CONTACT</el-menu-item>

    </el-menu>
  </div> -->
  <!-- <div>
    <Intro id="page1" class="item-content"/>
    <About id="page2" class="item-content"/>
    <Education id="page3" class="item-content"/>
    <Internship id="page4" class="item-content"/>
    <Projects id="page5" class="item-content"/>
    <Contact id="page6" class="item-content"/>
  </div> -->
  <!-- </div> -->
</template>

<script>
import Intro from './Intro'
// import About from './About'
// import Education from './Education'
// import Projects from './Projects'
// import Contact from './Contact'
// import Internship from './Internship'
export default {
  components: {Intro},
  // components: {Internship, Contact, Projects, Education, About, Intro},
  data () {
    return {
      activeIndex: '1',
      arrDom: [],
      headerFixed: false
    }
  },
  mounted () {
    this.arrDom = document.getElementsByClassName('item-content')
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      for (let i = 0; i < this.arrDom.length; i++) {
        if (this.arrDom[this.arrDom.length - 1].offsetTop - scrollTop > 760) {
          if (this.arrDom[i].offsetTop - scrollTop <= 760 && this.arrDom[i + 1].offsetTop - scrollTop > 760) {
            this.activeIndex = (i + 1) + ''
          }
        } else {
          this.activeIndex = this.arrDom.length + ''
        }
      }
    },
    handleSelect (key, keyPath) {
      this.activeIndex = key
      let pageId = document.querySelector('#page' + key)
      let nav = document.getElementById('nav-container')
      window.scrollTo({
        'top': pageId.offsetTop - nav.offsetHeight,
        'behavior': 'smooth'
      })
    }
  }
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
