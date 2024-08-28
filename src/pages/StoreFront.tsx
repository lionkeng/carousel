import Card from '../components/Card'
import products from '../assets/products'
/**
 * This is a functional component that renders the store front.
 * The store front displays 4 cards in a 2x2 grid layout.
 * Each card will have an image, a title, and a description.
 * @returns JSX.Element
 */
function StoreFront(): JSX.Element {
  return (
    <div className="w-full h-[calc(100vh-var(--nav-height))] p-4 flex flex-col sm:items-center sm:justify-center">
      <div className="w-full sm:max-w-[calc(100vh-var(--nav-height)-2rem)] grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id.toString()}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}

export default StoreFront
