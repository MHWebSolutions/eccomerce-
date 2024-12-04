import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/listContext/context"
import * as types from "../../contexts/listContext/types"
import Trash from "../../assets/trash-2.svg"
import style from "./style.css"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

    const [total,setTotal] = useState(0)
    const navigate = useNavigate()
    const {state,dispatch} = useContext(GlobalContext)
    const {cart} = state
    const [payment,setPayment] = useState('')
    const handleClick = (obj, index) => {
        dispatch({type: types.CART_REMOVE, payload : {obj,index}})
    }

    const handleNavigate = (id) => {
        navigate(`/about/${id}`)
    }

    const handleChange =  (e) => {

        setPayment(e)
    }

    useEffect(()=>{
        let soma = 0
        if(cart.length == 0) setTotal(0)
        if(cart.length > 0){
            cart.map(prod => soma += prod.price)
            setTotal(soma.toFixed(2))
        }
    })


    return(
        <>
            <div className="favorites">
                <h1>Carrinho</h1>
               {cart.length > 0 ? ( <div className="items">{cart.map((prod,index) => (
                    
                    <>
                    <div className="item" key={prod.id}>
                        <img src={prod.image} alt="" className="image" onClick={() => handleNavigate(prod.id)}/>
                        <div className="title">{prod.title}</div>
                        <p>${prod.price}</p>
                        <img src={Trash} alt="" className="trash" onClick={() => handleClick(cart, index)}/>
                    </div>
                </>
                    
                    ))}</div>) : (<p>lista vazia</p>)}
                    <div className="carrinho">
                        {!!payment != "" ? (
                            <p><select name="parcelas" id="teste" className="teste_payment">
                                    <option value="1x">1 vez</option>
                                </select></p>) : (<p>nada aqui</p>)}
                        <select name="teste" id="teste" className="teste_payment" onChange={e => setPayment(e.target.value)}>
                            <option value="disabled" disabled>pagamento</option>
                            <option value="">débito</option>
                            <option value="2">crédito</option>
                        </select>
                        <p>valor</p> <p>R${total}</p>
                    </div>
            </div>
        </>
    )
}