import Header from '../components/Header'
import CategoryQuickLinks from '../components/CategoryQuickLinks'
import HeroBanner from '../components/HeroBanner'
import FeaturedProducts from '../components/FeaturedProducts'
import CategoryHighlights from '../components/CategoryHighlights'
import MobileBottomNav from '../components/MobileBottomNav'

const HomePage = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto pt-20 pb-24">
        <CategoryQuickLinks />

        <HeroBanner />

        <FeaturedProducts />

        <CategoryHighlights />
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default HomePage
