import React from "react"
import { IBook } from "../globaltypes.ts/globalTypes"
import { Link } from "react-router-dom";
interface IProps {
	product: IBook;
  }
  
const ProductCard = ({product}:IProps) => {
	console.log(product)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 animate-fade-up animate-once animate-duration-[450ms] animate-delay-[600ms] animate-ease-in-out animate-normal animate-fill-both">
	<img src={product?.image} alt="" className="object-cover object-center w-48 mx-auto rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracki">{product?.title}</h2>
			<p className="text-gray-800"><span className="font-bold">Author:</span> {product?.author}</p>
			<p className="text-gray-800"><span className="font-bold">Publication Date:</span>{product?.publicationDate}</p>
		</div>
		<Link to={`/details/${product._id}`}>
		<button  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-600 text-gray-50" >Read more</button>
		</Link>
		
	</div>
</div>
  )
}

export default ProductCard