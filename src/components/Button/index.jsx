/* eslint-disable no-mixed-operators */
import style from "./style.css"
import * as types from '../../contexts/listContext/types'
import { GlobalContext } from "../../contexts/listContext/context"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const Button = ({small,large, obj}) => {
    const {state,dispatch} = useContext(GlobalContext)
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch({type: types.CART_ADD, payload:{new_item:obj}})
        navigate('/checkout')
    }


    return(
        !!small && (<button className="main-button small" onClick={handleClick}>Comprar</button>) || !!large && (<button className="main-button large" onClick={handleClick}>Comprar</button>)
    )
}
