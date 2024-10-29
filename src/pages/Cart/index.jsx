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
        if(payment == "credit") alert("deu boa")
        alert(payment)
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
                        {!payment == "credit" ? (<p>credito selecionado</p>) : ("")}
                        <select name="teste" id="teste" className="teste_payment" onChange={e => handleChange(e.target.value)}>
                            <option value="disabled" disabled>pagamento</option>
                            <option value="debit">débito</option>
                            <option value="credit">crédito</option>
                        </select>
                        <p>valor</p> <p>R${total}</p>
                    </div>
            </div>
        </>
    )
}