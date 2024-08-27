import Card from './Card'

/**
 * This is a functional component that renders the store front.
 * The store front displays 4 cards in a 2x2 grid layout.
 * Each card will have an image, a title, and a description.
 * @returns JSX.Element
 */
function StoreFront(): JSX.Element {
  const products = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Modern Kitchen',
      description: 'Description for Product 3',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Product 4',
      description: 'Description for Product 4',
    },
  ]

  return (
    <div className="w-full min-h-screen p-4 flex flex-col sm:items-center sm:justify-center">
      <div className="w-full sm:max-w-[calc(100vh-2rem)] grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
        {' '}
        {products.map((product) => (
          <Card
            key={product.id}
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
