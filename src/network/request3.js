import axios from 'axios'
import { reject, resolve } from 'core-js/es6/promise'


export function request(config,success,failure) {
    //use promise
    return new Promise((resolve,reject)=>{
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
                    resolve(res)
                })
                .catch(err=>{
                    reject(err)
                })

    })
   
}