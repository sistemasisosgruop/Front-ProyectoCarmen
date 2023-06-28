import { keyStorage } from '@utils/consts'
import { ReactNode, createContext, useState } from 'react'
import { Department } from 'types/department'

interface Props {
  children: ReactNode
}

interface CartContextSore {
  cart: Department[]
  addToCart: (product: Department) => void
  clearCart: () => void
}

export const DepartmentCartContext = createContext({} as CartContextSore)

export function DepartmentCartProvider({ children }: Props) {
  const [cart, setCart] = useState<Department[]>([])

  const addToCart = (product: Department) => {
    setCart([...cart, product])
    window.localStorage.setItem(keyStorage.DEPARTMENTS_CART, JSON.stringify(cart))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <DepartmentCartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart
      }}
    >
      {children}
    </DepartmentCartContext.Provider>
  )
}
