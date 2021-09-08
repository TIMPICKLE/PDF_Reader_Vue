
<template>
  <div id="container">
    <!-- 上一页、下一页 -->
    <div class="right-btn">
      <!-- 输入页码 -->
      <div class="pageNum">
        <input v-model.number="currentPage"
               type="number"
               class="inputNumber"
               @input="inputEvent()"> / {{pageCount}}
      </div>
      <div @click="changePdfPage('first')"
           class="turn">
        first
      </div>
	  <!-- 在按钮不符合条件时禁用 -->
      <div @click="changePdfPage('pre')"
           class="turn-btn"
           :style="currentPage===1?'cursor: not-allowed;':''">
        previous
      </div>
      <div @click="changePdfPage('next')"
           class="turn-btn"
           :style="currentPage===pageCount?'cursor: not-allowed;':''">
        next
      </div>
      <div @click="changePdfPage('last')"
           class="turn">
        last
      </div>
        <div @click="$refs.pdf.print()"
           class="turn">
        print
      </div>
  
    </div>

    <div class="pdfArea">
      <pdf :src="src"
           ref="pdf"
           v-show="loadedRatio===1"
           :page="currentPage"
           @num-pages="pageCount=$event"
           @progress="loadedRatio = $event"
           @page-loaded="currentPage=$event"
           @loaded="loadPdfHandler"
           @link-clicked="currentPage = $event"
           style="display: inline-block;width:100%"
           id="pdfID"></pdf>
    </div>
    <!-- 加载未完成时，展示进度条组件并计算进度 -->
    <div class="progress"
         v-show="loadedRatio!==1">
      <el-progress type="circle"
                   :width="70"
                   color="#53a7ff"
                   :percentage="Math.floor(loadedRatio * 100)"></el-progress>
      <br>
      <!-- 加载提示语 -->
      <span>{{remindShow}}</span>
    </div>
  </div>
</template>

<script>
//此页面为vue.pdf的测试页面  后期不加到主要项目中
import pdf from 'vue-pdf'

export default {

  components: {
    //此组件从vue.pdf导入 
    pdf
  },

  
  created () {
    this.prohibit()
  },
  destroyed () {
    // 在页面销毁时记得清空 setInterval
    clearInterval(this.intervalID)
  },
  
  mounted () {
    // 更改 loading 文字
    this.intervalID = setInterval(() => {
      this.remindShow === this.remindText.refresh
        ? this.remindShow = this.remindText.loading
        : this.remindShow = this.remindText.refresh
    }, 4000)
    // 监听滚动条事件//这边的滚动条我删掉了  直接以按钮跳转
  },

  data () {
    //这是一些静态状态，直接放到方法里的  文本文件
    return {
      // ----- loading -----
      remindText: {
        //这边写的是加载的提示  后期别忘了改成英文
        loading: 'Loading, please wait...',
        refresh: 'refreshing...'
      },
      remindShow: 'Loading please wait...',
      intervalID: '',
      // ----- vuepdf -----
      // src静态路径: /static/xxx.pdf
      // src服务器路径: 'http://.../xxx.pdf'
      src: '/CA2_README.pdf',
      // 当前页数
      currentPage: 0,
      // 总页数
      pageCount: 0,
      // 加载进度
      loadedRatio: 0
    }
  },
  methods: {
    // 监听滚动条事件
    listenerFunction (e) {
      document.getElementById('container').addEventListener('scroll',true)
    },
    // 页面回到顶部
    toTop () {
      document.getElementById('container').scrollTop = 0
    },
    // 输入页码时校验
    inputEvent () {
      if (this.currentPage > this.pageCount) {
        // 1. 大于max
        this.currentPage = this.pageCount
      } else if (this.currentPage < 1) {
        // 2. 小于min
        this.currentPage = 1
      }
    },
    // 切换页数
    changePdfPage (val) {
      if (val === 'pre' && this.currentPage > 1) {
        // 切换后页面回到顶部
        this.currentPage--
        this.toTop()
      } else if (val === 'next' && this.currentPage < this.pageCount) {
        this.currentPage++
        this.toTop()
      } else if (val === 'first') {
        this.currentPage = 1
        this.toTop()
      } else if (val === 'last' && this.currentPage < this.pageCount) {
        this.currentPage = this.pageCount
        this.toTop()
      }
    },

    // pdf加载时
    loadPdfHandler (e) {
      // 加载的时候先加载第一页
      this.currentPage = 1 
    },

    // 禁用鼠标右击、F12 来禁止打印和打开调试工具
    prohibit () {
      // console.log(document)
      document.oncontextmenu = function () {
        return false
      }
      document.onkeydown = function (e) {
        if (e.ctrlKey && (e.keyCode === 65 || e.keyCode === 67 || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 80 || e.keyCode === 83 || e.keyCode === 85 || e.keyCode === 86 || e.keyCode === 117)) {
          return false
        }
        if (e.keyCode === 18 || e.keyCode === 123) {
          return false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>


