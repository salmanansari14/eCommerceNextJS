'use client'
import { useEffect, useState } from "react";
import "./globals.css";
import Footer from "./miniComponent/Footer";
import Navbar from "./miniComponent/Navbar";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  console.log(children)
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log("skghflghfdldg")
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', newCart)
    let subt = 0
    let keys = Object.keys(newCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt);
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]['qty'] <= 0) {
      delete newCart[itemCode]
    }
  }

  return (
    <html lang="en">
      <body>
        <Navbar
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subt={subTotal} />
          <main addToCart={addToCart}>
           {children}
          </main>
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
