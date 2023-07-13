import { DepartmentCartContext } from '@context/DepartmentCartContext'
import { useContext } from 'react'

export function useDepartmentCart() {
  const context = useContext(DepartmentCartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
