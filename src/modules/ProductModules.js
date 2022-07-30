// import { axios } from "vue/types/umd"
import axios from 'axios'
/* eslint-disable */
export default {
    state:{ 
        productList:[]
    },
    getters:{ 
        getProductList:(state)=>state.productList
    },
    mutations:{ 
        setProductList:function(state,value){
            state.productList = value
        }
    },
    actions:{ 
        actionToGetProductList: ({commit}, {success})=>{
            axios.get('http://10.20.4.110:8080/product',{
                'Content-Type':'application/json; charset=UTF-8'
            })
            .then(response=>{
                //console.log(response)
                //console.log(response.data);
                commit('setProductList',response.data)
                success && success(response)
                // console.log(this.state.productList[0]);
            })
                
                //commit('setProductList',res.data))
            // .then(response=>{
            //     console.log(response.data);
            //     commit('setProductList',response.data)
            //     // for(let i=0;i<response.data.length;i++){
            //     //     console.log(response.data[i]);
            //     //     commit('setProductList',response.data[i])
            //     //     this.productList.push(response.data[i]);
            //     success && success(response)
            //     // }
            //     console.log('hkdgfds',this.getProductList);
            // })
            .catch((err)=>console.log(err))
            // fetch('http://10.20.4.110:8080/product',{
            //     mode: 'no-cors',
            //     method: 'GET',
            // })
            // res)=>{
            //     console.log(res,'resdf')
            // .then(response => {
            //     console.log(response)
            // })
            // .then(res =>{ 
            //     console.log(res,'fsadfasd')
            //     // commit('setProductList',res.products)
            //     // success && success(res)
            // })
        }
    }
}