import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'

function Category(): JSX.Element {
  const { categoryId } = useParams<{ categoryId: string }>()

  return (
    <div className="w-full h-[calc(100vh-var(--nav-height))] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Category: {categoryId}</h1>
      <div className="w-full max-w-4xl">
        <Carousel />
      </div>
    </div>
  )
}

export default Category
