const categories = [
  { name: 'Fashion', icon: 'checkroom' },
  { name: 'Tech', icon: 'devices' },
  { name: 'Home', icon: 'chair' },
  { name: 'Beauty', icon: 'face_5' }, // Or 'content_cut' / 'brush'
  { name: 'Accessory', icon: 'watch_button_press' },
  { name: 'More', icon: 'grid_view' },
]

const CategoryQuickLinks = () => {
  return (
    <div className="flex overflow-x-auto gap-8 px-4 py-8 no-scrollbar justify-center">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          {/* Circle Container */}
          <div
            className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center 
                       border border-base-300 transition-all duration-200 
                       group-hover:bg-primary group-hover:text-primary-content group-hover:scale-105"
          >
            <span className="material-symbols-outlined text-[28px] font-light">
              {cat.icon}
            </span>
          </div>

          {/* Label */}
          <p className="text-sm font-medium text-base-content/70 group-hover:text-base-content">
            {cat.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CategoryQuickLinks
