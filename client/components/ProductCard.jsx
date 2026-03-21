export default function ProductCard({ product, showRating, showCart }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
      <figure className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square object-cover"
        />

        <button className="btn btn-circle btn-xs absolute top-2 right-2">
          <span className="material-symbols-outlined text-sm">favorite</span>
        </button>
      </figure>

      <div className="card-body p-4 gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold leading-tight">{product.name}</h3>

          {showRating && (
            <div className="flex items-center gap-1 text-amber-500 text-xs">
              <span className="material-symbols-outlined text-sm">star</span>
              {product.rating}
            </div>
          )}
        </div>

        <p className="text-xs opacity-60">{product.category}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-primary font-bold">{product.price}</p>

          {showCart && (
            <button className="btn btn-primary btn-square btn-sm">
              <span className="material-symbols-outlined text-sm">
                add_shopping_cart
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
