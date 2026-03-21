const Header = () => {
  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-base-300 
    bg-base-100/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <div
              className="bg-primary text-primary-content w-9 h-9 
            flex items-center justify-center rounded-lg"
            >
              <span className="material-symbols-outlined text-lg">bolt</span>
            </div>

            <span>Flux</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <span
                className="material-symbols-outlined absolute 
              left-3 top-1/2 -translate-y-1/2 text-base-content/40"
              >
                search
              </span>

              <input
                type="text"
                placeholder="Search products, brands..."
                className="input input-bordered w-full pl-10 
                rounded-full bg-base-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-circle">
              <span className="material-symbols-outlined">person</span>
            </button>

            <button className="btn btn-ghost btn-circle relative">
              <span className="material-symbols-outlined">shopping_bag</span>

              <span
                className="absolute -top-1 -right-1 
              badge badge-primary badge-sm"
              >
                3
              </span>
            </button>

            <button className="btn btn-ghost btn-circle md:hidden">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
