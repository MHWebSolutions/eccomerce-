/* eslint-disable default-case */
import * as types from './types'


export const reducer = (state,action) => {
    switch (action.type){
        case types.CART_OPEN:{
            const {cart} = state
            return {...state, cart: true}
        }

        case types.CART_CLOSE:{
            const {cart} = state
            return {...state, cart: false}
        }

        case types.CHECKOUT_OPEN:{
            const {checkout} = state
            return {...state, checkout: true}
        }

        case types.CHECKOUT_CLOSE:{
            const {checkout} = state
            return {...state, checkout: false}
        }
    }
}