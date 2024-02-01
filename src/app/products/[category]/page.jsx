'use client'
import React, {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { Card } from '../../components/index.js'
import Link from 'next/link'
import FiltersProducts from './components/FiltersProducts.jsx'
import Head from 'next/head.js'
import Paginate from './components/Paginate.jsx'


const page = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const params = useParams()
    const category = params.category

    const [subCategory, setSubCategory] = useState(null)
    const [products, setProducts] = useState([])
    const [nextPage, setNextPage] = useState("")
    const [prevPage, setPrevPage] = useState("")
    const [proxPage, setProxPage] = useState("")
    const [antPage, setAntePage] = useState("")
    const [totalPages, setTotalPages] = useState("")
    const [page, setPage] = useState(1)

    useEffect(() => {
      const fetchData = async() => {
          const response = await axios.get(apiUrl + `api/v1/products?&limit=2&page=${page}&category=${category}&sub_category=${subCategory}`)
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
  },[page, subCategory])

  return (
    <div className='container-category'>
        {category == 'sofas' && <FiltersProducts setSubCategory={setSubCategory}></FiltersProducts>}
        <div className='container-cards'>
            <Card items={products}/>
            <Paginate
                nextPage={nextPage}
                prevPage={prevPage}
                proxPage={proxPage}
                antPage={antPage}
                page={page}
                totalPages={totalPages}
                setPage={setPage}></Paginate>
        </div>
    </div>
  )
}

export default page