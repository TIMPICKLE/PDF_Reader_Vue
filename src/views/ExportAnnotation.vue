
<template>

	<div id="toPrint" >
<hr>

         <!-- <el-input v-model="Username" placeholder="Please enter your name">{{Username}}</el-input>
         <el-input v-model="Group" placeholder="please enter annotation group">{{Group}}</el-input> -->
         <div v-for="(items,index) in result" :key="index" style="border-top:1px solid #000"> 
            <p>{{items.text }} </p>
            <p2 v-show=" items.tags.length >0  " >The position is {{items.tags}}</p2>
        </div>

        <div>
            <textarea rows="15" cols="45" id="plaintext">
                here you can get plain text annotationa
            </textarea>
        </div>

        <div style="height: 100px; text-align: center; line-height: 50px ;border-top:1px solid #000">
            <el-button   @click="doPrint" >Print annotations</el-button>
            <el-button  @click="getPlainText"  >Get plaintext</el-button>
            <el-button  @click="doGetAnnotation"  >Get annotations</el-button>
        </div>

	
	</div>

</template>

<script  >
import axios from 'axios'
//如何获得json的值
//  <h1>{{result.data.rows[0].text}}</h1>
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
            Username:'',
            Group:'',
			text:"empty",
			result:[],
            GetString:[],
            GetPosition:[],
            GetAll:[],
            
		}
	},
	created() {
		axios({
			//你这边是通过get的方式来获取API接口的数据
            //注意  写一个输入框  来要求 用户 得到指定的 
			url:'https://api.hypothes.is/api/search',
            params: {
                user:'NIHAODONG',
              },
			method:'get', 
            headers:{
                "Authorization":"Bearer " + "6879-B3HKiD27NZIfvOBT3ElmlQjMj9q-_2crtgdP5xYGIs8"
            }
		}).then( res => { 
			console.log(res)
			this.result = res.data.rows;
		}
		).catch( err =>{
            console.log("wrong data feedback")
        }

        )
	},


	components: {
 
		
	},
	methods: {
        doGetAnnotation(){
            	axios({

			url:'https://api.hypothes.is/api/search',
            params: {
                user:'NIHAODONG',
              },
			method:'get', 
            headers:{
                "Authorization":"Bearer " + "6879-B3HKiD27NZIfvOBT3ElmlQjMj9q-_2crtgdP5xYGIs8"
            }
		}).then( res => { 
			console.log(res)
			this.result = res.data.rows;
		}
		).catch( err =>{
            console.log("wrong data feedback")
        }

        )
        },


        doPrint(){
        var head_str = "<html><head><title></title></head><body>"; //先生成头部
        var foot_str = "</body></html>"; //生成尾部
        var older = document.body.innerHTML;
        var new_str = document.getElementById('toPrint').innerHTML; //获取指定打印区域
        var old_str = document.body.innerHTML; //获得原本页面的代码
        document.body.innerHTML = head_str + new_str + foot_str; //构建新网页
        window.print(); //打印刚才新建的网页
        document.body.innerHTML = older; //将网页还原
        //还原之后会有个问题  就是卡死  
        return false;
                },

        getPlainText(){
            for(var i in this.result){
            this.GetString[i]=JSON.stringify(this.result[i].text)
            this.GetPosition[i]=JSON.stringify(this.result[i].tags)
            this.GetAll[i]=this.GetString[i]+this.GetPosition[i]
            document.getElementById("plaintext").value= this.GetAll
          
            }
            // this.GetString=JSON.stringify(this.result[0].text)
            // document.getElementById("plaintext").value= this.GetString
            // console.log(this.result)
            console.log(this.GetString)


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


    <style>
    p{
        font-style: italic;
        font-weight: bold;
        font-size: 25px;           
    };
    p2{
        font-weight: bold;
        font-size: 23px;           
    }
        </style>



