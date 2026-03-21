import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Modern Classic Watch',
    category: 'Accessories',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
  },
  {
    id: 2,
    name: 'Studio Wireless Gen 2',
    category: 'Audio',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd',
  },
  {
    id: 3,
    name: 'Clean White Sneaker',
    category: 'Footwear',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: 4,
    name: 'Oak Wood Desk Clock',
    category: 'Living',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
  },
]

const FeaturedProducts = () => {
  return (
    <section className="px-4 py-12">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <p className="opacity-60">Handpicked items for you</p>
        </div>

        <button className="btn btn-ghost btn-sm">View all →</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
