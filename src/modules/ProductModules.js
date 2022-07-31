import axios from 'axios'
/* eslint-disable */
export default {
    state:{ 
        userId: 0,
        merchantId: 0,
        productList:[]
    },
    getters:{ 
        getProductList:(state)=>state.productList,
        getUser:(state)=>{
            // state.userId
            // var cartItems=JSON.parse(localStorage.getItem("userId")||"[]")
            return localStorage.getItem('userId')
            // return cartItems[0]
        },
        getMerchant: (state)=>{
            return localStorage.getItem('merchantId')
        }
    },
    mutations:{ 
        setProductList:function(state,value){
            state.productList = value
        },
        setUser: function(state,value){
            console.log(state);
            console.log(value);
            localStorage.setItem('userId',value)
        },
        setMerchant: function(state,value){
            console.log(state);
            console.log(value);
            localStorage.setItem('merchantId',value)
        },
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
                
            .catch((err)=>console.log(err))
            
        }
    }
}