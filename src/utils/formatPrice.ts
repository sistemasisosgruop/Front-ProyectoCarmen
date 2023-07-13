export const formatPrice = (price: number) => {
  return price.toLocaleString(undefined, { minimumFractionDigits: 2 })
}
