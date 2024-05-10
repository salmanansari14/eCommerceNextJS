'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const ref = useRef()
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Unbrandwears</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href='/component/tshirts' class="mr-5 hover:text-gray-900">T shirts</Link>
                        <Link href='/component/mugs' class="mr-5 hover:text-gray-900">Mugs</Link>
                        <Link href='/component/stickers' class="mr-5 hover:text-gray-900">Sticker</Link>
                        <Link href='/component/hoodies' class="mr-5 hover:text-gray-900">Hoodies</Link>
                    </nav>
                    <div onClick={toggleCart} className='cart absolute right-0 top-4 mx-5'>
                        <FaCartShopping className='text-xl md:text-2xl cursor-pointer' />
                    </div>
                </div>
                <div ref={ref} className="sideCart z-10 absolute h-full top-0 right-0 bg-pink-100 px-8 w-72 py-10 transform transition-transform translate-x-full">
                    <h2 className="font-bold text-xl text-center">shopping Cart</h2>
                    <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500">
                        <IoMdCloseCircle />
                    </span>
                    <ol className='list-decimal font-semibold'>
                        {Object.keys(cart).length == 0 && <div className='my-4 text-base font-semibold'>Your cart is empty</div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className='item flex'>
                                    <div className='w-2/3 font-semibold'>{cart[k].name}
                                    </div>
                                    <div className=' flex items-center justify-center w-1/3 text-lg'>
                                        <AiFillMinusCircle className='cursor-pointer text-pink-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle className='cursor-pointer text-pink-500' />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <div className="flex ">
                        <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
                            <BsFillBagFill className='m-1' />
                            Checkout
                        </button>
                        <button onClick={clearCart} className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
                            Clear Cart
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar