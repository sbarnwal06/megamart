export const formatPrice = (value) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 2,
    }).format(value)
  
  export const getDiscountedPrice = (price, discount) =>
    Number((price - (price * discount) / 100).toFixed(2))
  