const FilterBar = () => {
  return (
    <div className="flex gap-3 pb-6 overflow-x-auto">
      <button className="btn btn-outline btn-sm gap-2">
        <span className="material-symbols-outlined text-sm">filter_list</span>
        Filters
      </button>

      <div className="divider divider-horizontal"></div>

      <button className="btn btn-outline btn-sm gap-1">
        Price
        <span className="material-symbols-outlined text-sm">
          keyboard_arrow_down
        </span>
      </button>

      <button className="btn btn-outline btn-sm gap-1">
        Popularity
        <span className="material-symbols-outlined text-sm">
          keyboard_arrow_down
        </span>
      </button>

      <button className="btn btn-outline btn-sm gap-1">
        Category
        <span className="material-symbols-outlined text-sm">
          keyboard_arrow_down
        </span>
      </button>
    </div>
  )
}

export default FilterBar
