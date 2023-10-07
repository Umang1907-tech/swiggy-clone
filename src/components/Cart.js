import React from 'react'

const Cart = () => {
  return (
    <div className='mt-24'>
       <div className="container mx-auto px-4 py-6 flex">
        <div className="w-8/12 bg-white rounded-lg shadow-md p-4 h-[500px]"> 
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Welcome to Our Store</h2>
                <p className="text-gray-600">Explore our wide range of products!</p>
            </div>
            <div className="mt-4">
                <img src="image.jpg" alt="Product Image" className="max-w-full h-auto mx-auto"/>
            </div>
        </div>
        <div className="w-4/12 ml-4 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <div className="bg-gray-200 border border-gray-300 rounded p-2">
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart