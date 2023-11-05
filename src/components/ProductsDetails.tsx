import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../redux/store/hook'
import { IBook } from '../globaltypes.ts/globalTypes'
import { useGetbooksQuery, } from '../redux/feature/booksData'

const ProductsDetails = () => {
    const {id}=useParams()
   const data = useGetbooksQuery(undefined)
   // eslint-disable-next-line no-unsafe-optional-chaining
   const filtered= (data?.data?.data?.data?.filter((product:IBook)=>product._id===id))

    return (
        <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-600 text-gray-50">
			<div className="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leadi">Book Name: {filtered?.[0]?.title} </p>
					<p className="leadi">Author:{filtered?.[0]?.author} </p>
					<p className="leadi">Genre:{filtered?.[0]?.genre} </p>
					<p className="leadi">Publication Date:{filtered?.[0]?.publicationDate} </p>
				</div>
			</div>
		
		</div>
		<div className="lg:w-1/2 xl:w-4/5 bg-gray-100">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img  src={filtered?.[0]?.image} alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video   h-auto" />
			</div>
            <div className='flex'>

            </div>
		</div>
	</div>
</section>
    )
}

export default ProductsDetails