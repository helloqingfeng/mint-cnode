<template>
  <div id="app">
   <div class="page-title"></div>
   <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">首页</mt-tab-item>
      <mt-tab-item id="2">精华</mt-tab-item>
      <mt-tab-item id="3">分享</mt-tab-item>
      <mt-tab-item id="4">问答</mt-tab-item>
      <mt-tab-item id="5">招聘</mt-tab-item>
      <mt-tab-item id="6">关于我</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <List></List>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <Good></Good>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <Share></Share>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <Ask></Ask>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <Job></Job>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
       <Lazy></Lazy>
     </mt-tab-container-item>
   </mt-tab-container>
 </div>
</div>
</template>

<script>
  import List from './components/list.vue'
  import Good from './components/good.vue'
  import Ask from './components/ask.vue'
  import Share from './components/share.vue'
  import Job from './components/job.vue'
  import Lazy from './components/lazy.vue'
  export default {
    components: {List,Ask,Job,Good,Share,Lazy},
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        selected: '1'
      }
    }
  }
</script>

<style>
  .mint-swipe{
    height: 200px;
  }
  .swipeHight{
    height: 200px;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
