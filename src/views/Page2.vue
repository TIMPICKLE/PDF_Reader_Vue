<template>
<div class="iframe-father">
   <keep-alive>
<!--<iframe  :src="'../../static/pdfjs-2.9.359-dist/web/viewer.html?file=/CA2_README.pdf'" width="100%" height="100%" id="test_iframe"></iframe>-->
 <iframe  :src="'../../static/pdfjs-2.9.359-dist/pdf.js-hypothes.is-master/viewer/web/viewer.html?file=/CA2_README.pdf'" width="100%" height="100%" id="test_iframe"></iframe>
 <!--这边有个问题是 无法在网络离线状态下 使用“假设”第三方库 无法开启验证和云端数据库 -->
  </keep-alive>
  </div>
  
</template>

<script>
//import annotator from  '../../node_modules/annotator';
export default {
  data() {
    return {
      name:"nihaop ",
      url:"/CA2_README.pdf"
      //默认加载此文件，对于用户来说通过PDF.js可以上传文件
      //若被问及是否能通过URL加载网络pdf文件 就涉及到跨域问题  通过proxy解决
    }
  },

  methods: {
    //文本锚定的实现方法是 3个选择器

  },

  mounted() {
    //在script引入 外部文件
    	// var script = document.createElement('iframe')
      // script.type = 'text/javascript'
      // script.async = true
      // script.src = 'https://hypothes.is/embed.js'
      // document.head.appendChild(script)
      //调整iframe  适配屏幕
     var oIframe = window.top.document.getElementById("test_iframe")
     var oBody = document.getElementsByTagName("body")[0]
     oIframe.style.height = oBody.offsetHeight + 120 + 'px'

     //接下来再做一个引入
     var script = document.createElement('iframe')
      script.type = 'text/javascript'
      script.async = true
      script.src = ' https://via.hypothes.is//CA2_README.pdf'
      document.head.appendChild(script)

      


  },
}
</script>

<style>
#test_iframe{
 width: 100%;

 }
</style>

