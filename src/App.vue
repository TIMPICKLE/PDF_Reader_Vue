<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
   <div class="content flex">
     <div class="left">
       <ExportAnnotation></ExportAnnotation>

     </div>

    <div class="right">
      
      <router-view>
         
      </router-view>
    </div>
   </div>
  </div>
</template>

<script>
import  Header  from './components/Header.vue'
import ExportAnnotation from './views/ExportAnnotation.vue'

export default {
  //当前组件
  name: 'App',
  //components 是注册页面中使用的组件
  components: {
   Header,
  ExportAnnotation

  }
}
</script>

<style>
#app {
 width: 100vw;
 height: 100vh;
 display:flex;
 flex-direction: column;
}

.header{
  height: 60px;
  background: lightcoral;
}

.left{
  width: 400px;

  
}
.right{
  flex:1;
  
}
.content{
  flex:1;
}

</style>
