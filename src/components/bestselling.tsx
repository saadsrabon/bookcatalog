import React, { useEffect, useState } from "react"
import ProductCard from "./productCard"
import { useGetbooksQuery, useSearchQuery } from "../redux/feature/booksData"
import { IBook } from "../globaltypes.ts/globalTypes"
import { useAppSelector } from "../redux/store/hook"

const Bestselling = () => {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch("data.json")

  //     .then((res) => res.json())
  //     .then((json) => setProducts(json))
  // }, [])

  // console.log(products)
  const {searchtext}=useAppSelector(state=>state.search)
  const {data}=useSearchQuery(searchtext)
  console.log(data?.data?.data)

  return (
    <div className="my-48 animate-fade-right">
        <div className="text-center ">
        <h2 className="text-4xl font-bold my-12 ">Check Our Latest <span className="text-blue-600">books</span></h2>
      <div className="flex justify-center my-8">
        
      <div className="animate-bounce  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
      </div>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6  justify-items-center">
           {
           data?.data?.data?.map((product: IBook) => (
              <ProductCard product={product} />
            ))
           }
            </div>
       
       
    </div>
  )
}

export default Bestselling