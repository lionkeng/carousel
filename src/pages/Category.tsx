import Carousel from '../components/Carousel/Carousel'
import products from '../assets/products'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
function Category(): JSX.Element {
  const { selectedProduct } = useContext(AppContext)
  const product = products.find((product) => product.id === selectedProduct)
  return (
    <div className="w-full h-[calc(100vh-var(--nav-height))] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">{`Home plans with ${product?.title}`}</h1>
      <div className="w-full max-w-4xl">
        <Carousel />
      </div>
    </div>
  )
}

export default Category
