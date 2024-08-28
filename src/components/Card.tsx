import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

interface CardProps {
  id: string // Added id field
  image: string
  title: string
  description: string
}

function Card({ id, image, title, description }: CardProps): JSX.Element {
  const navigate = useNavigate()
  const { setSelectedProduct } = useContext(AppContext)
  const handleClick = () => {
    setSelectedProduct(parseInt(id, 10))
    navigate(`/category/${id}`)
  }

  return (
    <div
      className="aspect-square bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-3/4 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="h-1/4 p-4 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-900 truncate">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default Card
