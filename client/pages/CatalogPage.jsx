import Header from '../components/Header'
import MobileBottomNav from '../components/MobileBottomNav'
import ProductCard from '../components/ProductCard'
import FilterBar from '../components/FilterBar'

const products = [
  {
    id: 1,
    name: 'Minimalist Watch',
    category: 'Essentials Collection',
    price: '$85',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
  },
  {
    id: 2,
    name: 'Canvas Backpack',
    category: 'Travel Gear',
    price: '$65',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    category: 'Audio Tech',
    price: '$120',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    category: 'Accessories',
    price: '$45',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
  },
  {
    id: 5,
    name: 'Studio Headphones',
    category: 'Premium Audio',
    price: '$299',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd',
  },
  {
    id: 6,
    name: 'Instant Camera',
    category: 'Photography',
    price: '$99',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c',
  },
]

const CatalogPage = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-20 pb-28">
        {/* Search */}
        <div className="py-6">
          <div className="relative">
            <span
              className="material-symbols-outlined absolute 
            left-3 top-1/2 -translate-y-1/2 text-base-content/40"
            >
              search
            </span>

            <input
              type="text"
              placeholder="Search for gear, accessories, or tech..."
              className="input input-bordered w-full pl-10 
              rounded-xl bg-base-100"
            />
          </div>
        </div>

        <FilterBar />

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCart
              showRating
            />
          ))}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default CatalogPage
