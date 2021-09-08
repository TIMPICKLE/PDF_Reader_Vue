<template >
    <div class="nav flex j-s a-c">
        <div>PDF annotation tool</div>
     
    <el-menu 
    :default-active="activeIndex" 
     class="el-menu-demo" 
     mode="horizontal" 
     @select="handleSelect"
     router
    >

  <el-menu-item index="/">Work table</el-menu-item>
  <el-menu-item index="/user" >Reading model</el-menu-item>
  <el-menu-item index="/test2" >History Version</el-menu-item>
  <el-menu-item index="/test" >History Version3</el-menu-item>
  <el-menu-item index="4"><a href="https://github.com/TIMPICKLE" target="_blank">about developer</a></el-menu-item>
</el-menu>
<div class="line"></div>

    </div>
</template>

<script>
export default {
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style >
.nav{
    background: white;
    padding:0 20px ;
    font-size: 20px;
}


  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>