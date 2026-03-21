const CategoryHighlights = () => {
  return (
    <section className="px-4 py-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="hero h-64 rounded-xl"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1483985988355-763728e1935b)',
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">Women's Edit</h3>

              <button className="btn btn-sm">Discover</button>
            </div>
          </div>
        </div>

        <div
          className="hero h-64 rounded-xl"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1490578474895-699cd4e2cf59)',
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">Men's Edit</h3>

              <button className="btn btn-sm">Discover</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryHighlights
