'use client'

import { ProductProvider } from './Product/ProductContext'

const Provider = ({ children }) => {
  return (
    <>
      <ProductProvider>{children}</ProductProvider>
    </>
  )
}

export default Provider
