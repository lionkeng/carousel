import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'

function Category(): JSX.Element {
  const { categoryId } = useParams<{ categoryId: string }>()

  return (
    <div className="w-full h-[calc(100vh-var(--nav-height))]">
      <h1 className="text-2xl font-bold mb-4">Category: {categoryId}</h1>
      <Carousel />
    </div>
  )
}

export default Category
