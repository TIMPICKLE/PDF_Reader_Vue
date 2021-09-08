<template>
	<div>
		<button @click="logContent">
			log content try
		</button>
		<pdf
			ref="myPdfComponent"
			src="/CA2_README.pdf"
		></pdf>
		
		<h1>{{text}}</h1>
		<h1>{{result}}</h1>
	</div>
</template>

<script  >
import axios from 'axios'

import pdf from 'vue-pdf'
// axios({
// 	//url:'/api/search/acct:NIHAODONG',
// 	url:'https://api.hypothes.is/api/search?user=NIHAODONG',
// 	method:'get', 
// }).then(res => {
// 	console.log(res);
// })







export default {
	data() {
		return {
			text:"empty",
			result:''
		}
	},
	created() {
		axios({
			//url:'/api/search/acct:NIHAODONG',
			url:'https://api.hypothes.is/api/search?user=NIHAODONG',
			method:'get', 
		}).then( res => { 
			console.log(res)
			this.result = res;
		}
		)
	},


	components: {
		pdf,
		
	},
	methods: {
    //这个方法让你获取了文本内容  那么下面你可以尝试进行转跳 然后在另外一个页面show出来
		logContent() {
			//原来是在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定。
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
	mounted() {
	  var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      //script.src = 'https://hypothes.is/embed.js'
      document.head.appendChild(script)
	},
}

</script>



