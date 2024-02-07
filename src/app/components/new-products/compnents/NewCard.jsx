'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Card, CardLoader } from '../../index.js'

const NewCard = () => {
    const [products, setPoducts] = useState([])
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(apiUrl + 'api/v1/products?category=sofas&limit=8&page=1')
            try {
                if(response.data.success){
                   setPoducts(response.data.products.docs)
                } else {
                    console.log('No se obtuvieron los productos');
                }
            } catch (error) {
                log(error.message)
            }
        }
        fetchData()
    },[])
  return (
    <>
        {products.length > 0 ? 
            <Card items={products}></Card>
            :
            <CardLoader count={8}></CardLoader>
        }
    </>
  )
}

export default NewCard