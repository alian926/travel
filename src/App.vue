<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <keep-alive>
      <router-view/>      
    </keep-alive>
  </div>
</template>

<script>
//以.vue结尾的文件是一个单文本组件Vue.component('name',{})
export default {
  name: 'App'
}
</script>

<style>

</style>
