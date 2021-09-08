import axios from 'axios'


export function request(config) {
    //create axios instance
    const instance = axios.create({
        //biscal property
        baseURL:'type your URl',
        timeout:5000,
        headers:'',
        method:'',
        params:'',
        auth:'',
        responseType: '',
        proxy:'',
    })

    instance(config.baseConfig)
    .then(res =>{
       // success(res)
    })
    .catch(err=>{
       // failure(err)
    })
}

//how to use in componet?
// reuqest({
//     baseConfig:{

//     },
//     success:function(res){

//     },
//     failure:function(err){

//     }
// })