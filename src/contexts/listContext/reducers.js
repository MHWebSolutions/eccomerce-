/* eslint-disable default-case */
import * as types from './types'

const remove_item = (obj,index) => {
    obj.splice(index,1)
    return obj
}

const add_item = (obj,new_item) => {
    obj.push(new_item)
    return obj 
}

export const reducer = (state,action) => {
    switch (action.type){
        case types.CART_ADD:{
            const {cart} = state
            const {new_item} = action.payload
            let{qtnd} = action.payload
            if(qtnd > 1){
                let array = []
                while(qtnd > 0){
                    const newP = add_item(array,new_item)
                    qtnd -= 1
                }
                const newCart = [...cart, ...array]
                console.log(newCart)
                return{...state, cart: newCart}
            }
            else{
                const newObj = add_item(cart,new_item)
                return {...state, cart: newObj}
            }
        }

        case types.CART_REMOVE:{
            const {cart} = state
            const {obj,index} = action.payload
            const newObj = remove_item(obj,index)
            return {...state, cart: newObj}
        }

        case types.FAV_ADD:{
            const {favorites} = state
            const {new_item} = action.payload
            const newObj = add_item(favorites,new_item)
            return {...state, favorites: newObj}
        }

        case types.FAV_REMOVE:{
            const {favorites} = state
            const {obj,index} = action.payload
            const newObj = remove_item(obj,index)
            return {...state, favorites: newObj}
        }
    }
}