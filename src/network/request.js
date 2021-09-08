import axios from 'axios'


export function request(config,success,failure) {
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

    instance(config)
    .then(res =>{
        success(res)
    })
    .catch(err=>{
        failure(err)
    })
}