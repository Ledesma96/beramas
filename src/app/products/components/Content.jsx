'use client'
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from '../../components/index.js'
import Paginate from '../[category]/components/Paginate.jsx'

const Content = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [products, setProducts] = useState([])
    const [nextPage, setNextPage] = useState("")
    const [prevPage, setPrevPage] = useState("")
    const [proxPage, setProxPage] = useState("")
    const [antPage, setAntePage] = useState("")
    const [totalPages, setTotalPages] = useState("")
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(apiUrl + `api/v1/products?&limit=2&page=${page}`)
            try {
                if(response.data.success){
                    setProducts(response.data.products.docs)
                    setNextPage(response.data.products.hasNextPage)
                    setPrevPage(response.data.products.hasPrevPage)
                    setAntePage(response.data.products.prevPage)
                    setProxPage(response.data.products.nextPage)
                    setTotalPages(response.data.products.totalPages)
                    setPage(response.data.products.page)
                } else {
                    console.log('No se obtuvieron los productos');
                }
            } catch (error) {
                log(error.message)
            }
        }
        fetchData()
    },[page])
  return (
    <>
        <Card items={products}></Card>
        <Paginate
                nextPage={nextPage}
                prevPage={prevPage}
                proxPage={proxPage}
                antPage={antPage}
                page={page}
                totalPages={totalPages}
                setPage={setPage}></Paginate>
    </>
  )
}

export default Content