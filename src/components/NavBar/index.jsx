import MyImage from '../../assets/Group 1.svg'
import Cart from '../../assets/shopping-cart.svg'
import style from './style.css'
import Heart from '../../assets/heart.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/listContext/context'

export const NavBar = () => {
    const navigate = useNavigate()
    const{state,dispatch} = useContext(GlobalContext)
    const{cart,favorites} = state

    const handleHome = () => {
        navigate('/')
    }

    const handleFav = () => {
        navigate('/favorites')
    }

    const handleCart = () => {
        navigate('/checkout')
    }

    return(
        <>
            <div className="Nav">
            <div className="logo">
                <img src={MyImage} alt="" onClick={handleHome}/>
            </div>

            <div className="user_data">
                    <div className='mascara'>
                        {favorites.length > 0 ? (<div className='number'>{favorites.length}</div>) : (<></>)}
                        <div className='element'>
                            <img src={Heart} alt="" onClick={handleFav} className='icon'/>
                        </div>
                    </div>
                    <div className='mascara'>
                        {cart.length > 0 ? (<div className='number'>{cart.length}</div>) : (<></>)}
                        <div className='element'>
                            <img src={Cart} alt="" onClick={handleCart} className='icon'/>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}