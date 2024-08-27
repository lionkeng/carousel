import Card from '../components/Card'

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
      title: 'Open Floor Plan',
      description: 'Large open living space with minimal walls.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'In-Law Suites',
      description: 'Multi-generational living space.',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Multi-purpose Rooms',
      description: 'Versatile spaces for various activities.',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Outdoor Living',
      description: 'Dedicated outdoor areas for relaxation.',
    },
  ]

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
