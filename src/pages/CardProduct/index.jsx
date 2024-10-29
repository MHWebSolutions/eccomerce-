/* eslint-disable default-case */
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'

export const Card = () => {
    const navigate = useNavigate()

    const [products,setStore] = useState([])
    const[filtered,setFiltered] = useState([])
    const[search,setSearch] = useState("")

    const handleFetch = async () => {
        const req = await fetch("https://fakestoreapi.com/products")
        const products = await req.json()
        setStore(products)
        setFiltered(products)
    }
  
    useEffect(() => {
        handleFetch()
    },[])


    const handleClick = (id) => {
        navigate(`/about/${id}`)
    }

    const handleChange = (e) =>{
        setFiltered(products)
        const select = document.querySelector(".category").value
        if(select != "all"){
            const filtrado = products.filter(prod => prod.category == select)
            setFiltered(filtrado)
        }
        
    }

    const handlePrice = (e) => {
        const select = document.querySelector(".prices").value
        setFiltered(products)
        
        if(select !="all"){
            switch(select){
                case "under10":{
                    const filtrado = filtered.filter(prod => prod.price <= 10)
                    setFiltered(filtrado)
                    return
                }

                case"10/20":{
                    const filtrado = filtered.filter(prod => prod.price >= 10 && prod.price <=20)
                    setFiltered(filtrado)
                    return
                }

                case"20/50":{
                    const filtrado = filtered.filter(prod => prod.price >= 20 && prod.price <= 50)
                    setFiltered(filtrado)
                    return
                }

                case"50/100":{
                    const filtrado = filtered.filter(prod => prod.price >= 50 && prod.price <= 100)
                    setFiltered(filtrado)
                    return
                }

                case"+100":{
                    const filtrado = filtered.filter(prod => prod.price > 100)
                    setFiltered(filtrado)
                    return
                }
            }
        }
    }
    
    const handleInput = (e) => {
        setSearch(e)
        setFiltered(products)

        if(e.length > 0){
            const filtrado = filtered.filter(prod => prod.title.toLowerCase().includes(e.toLowerCase()))
            setFiltered(filtrado)
        }
    }


    return(
        <>
            <div className='inputs' id='fixed'>
                <input type="text" name="" id="teste" placeholder='pesquisar produto' onChange={(e) => handleInput(e.target.value)}/>
                <select name="teste" id="teste" onChange={(e) => handleChange(e)} className='category'>
                    <optgroup>
                        <option value="" disabled>Filtrar por categoria</option>
                        <option value="all">todos</option>
                        <option value="men's clothing">roupas masculinas</option>
                        <option value="jewelery">jóias</option>
                        <option value="electronics">eletrônicos</option>
                        <option value="women's clothing">roupas femininas</option>
                    </optgroup>
                </select>
                 |
                <select name="teste" id="teste" className='prices' onChange={(e) => handlePrice(e)}>
                    <optgroup>
                        <option value="" disabled>Filtrar por preço</option>
                        <option value="all">todos</option>
                        <option value="under10">Abaixo de R$10,00</option>
                        <option value="10/20">Entre R$10,00 e R$20,00</option>
                        <option value="20/50">Entre R$20,00 e R$50,00</option>
                        <option value="50/100">Entre R$50,00 e R$100,00</option>
                        <option value="+100">Acima de R$100,00</option>
                    </optgroup>
                </select>
            </div>
            <div className='grid'>
            {filtered.map(prod => (
                <>
                    <div key={prod.id} className="card" onClick={e =>handleClick(prod.id)}>
                        <img src={prod.image} alt=""/>
                        <h1>{prod.title}</h1>
                        <p>${prod.price}</p>
                        
                    </div>
                </>
            ))}
            </div>
        </>
    )
}