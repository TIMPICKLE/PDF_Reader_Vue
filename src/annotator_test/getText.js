import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//这部分使用vuex来进行全局 变量的获取和传递
const store = new Vuex.Store({
  state:{
    ref:"myPdfComponent",
    src:"/test_PDF.pdf",
    text:String,
  },
  mutations:{
	logContent() {
        var that = this
        var str
        var text

        this.$refs.myPdfComponent.pdf.forEachPage(function(page) {

            return page.getTextContent()
            .then((content)=> {

                var textnew = content.items.map(item => item.str);
                var str = JSON.stringify(textnew);
                that.text = str
      //这边进行 数据的传递  走你！
            })
        });
    }
  },
  actions:{},
  gutters:{},
  modules:{}
})




//然后导出这个变量
export default store