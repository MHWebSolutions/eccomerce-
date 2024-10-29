import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from './style.css'
import { Button } from "../../components/Button"
import Cart from '../../assets/shopping-cart.svg'
import Heart from '../../assets/heart.svg'
import { Loading } from "../../components/Loading"
import { GlobalContext } from "../../contexts/listContext/context"
import * as types from "../../contexts/listContext/types"
import * as windowTypes from "../../contexts/windowContext/types"
import { WindowsContext } from "../../contexts/windowContext/context"


export const Product = () => {
    const [product,setProduct] = useState({})
    const[qtnd, setQntd] = useState(0)
    const [loading,setLoading] = useState(true)
    const {dispatch} = useContext(GlobalContext)
    const{stateWindow, dispatchWindow} = useContext(WindowsContext)
    const {id} = useParams()
 
    const handleFetch = async () => {
        const req = await fetch(`https://fakestoreapi.com/products/${id}`)
        const products = await req.json()
        setProduct(products)
        setLoading(false)
      }

      const handleFav = () => {
          dispatch({type: types.FAV_ADD, payload:{new_item:product}})
      }

      const handleCart = () => {
        dispatch({type: types.CART_ADD, payload:{new_item:product, qtnd}})        
    }

      useEffect(()=>{
        handleFetch()
      },[])

      return (
        <>
        <div id="prod">
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <div className="prod_data">
              <div className="prod_content">
                <h1 className="data">{product.title}</h1>
                <p className="data">{product.description}</p>
                <p className="data">$ {product.price}</p>
                <div>
                  <p>Quantidade: {qtnd}</p>
                  <input type="range" name="range" id="range" onChange={e => setQntd(e.target.value)} min={1} max={100}/>
                </div>

                <div className="checkout ">
                  <Button large obj={product}/>
                  <img src={Cart} alt="" className="Cart" onClick={handleCart}/>
                  <img src={Heart} alt="" className="Cart" onClick={handleFav}/>
                </div>
              </div>
            </div>
        </div>
            <Loading loading={loading}/>
        </>
      )
      
}