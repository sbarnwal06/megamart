import products from '../data/products.json'

export const getProducts = async () => products
export const getProductById = async (id) => products.find(product => product.id === Number(id))
