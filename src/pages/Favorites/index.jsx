import { useContext } from "react"
import { GlobalContext } from "../../contexts/listContext/context"
import * as types from "../../contexts/listContext/types"
import Trash from "../../assets/trash-2.svg"
import style from "./style.css"
import { useNavigate } from "react-router-dom"

export const Favorites = () => {

    const navigate = useNavigate()
    const {state,dispatch} = useContext(GlobalContext)
    const {favorites} = state

    const handleClick = (obj, index) => {
        dispatch({type: types.FAV_REMOVE, payload : {obj,index}})
    }

    const handleNavigate = (id) => {
        navigate(`/about/${id}`)
    }


    return(
        <>
            <div className="favorites">
                <h1>Favoritos</h1>
                {favorites.length > 0 ? (
                    <div className="items_list">{favorites.map((fav,index) => (
                        <>
                            <div className="item" key={fav.id}>
                                <img src={fav.image} alt="" className="image" onClick={() => handleNavigate(fav.id)}/>
                                <div className="title">{fav.title}</div>
                                <p>${fav.price}</p>
                                <img src={Trash} alt="" className="trash" onClick={() => handleClick(state.favorites, index)}/>
                            </div>
                        </>
                        ))}</div>
                ) : (<p>lista vazia</p>)}
            </div>
        </>
    )
}