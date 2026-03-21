const MobileBottomNav = () => {
  return (
    <nav
      className="fixed bottom-4 left-1/2 
    -translate-x-1/2 w-[92%] max-w-md z-50 md:hidden"
    >
      <div
        className="bg-base-100/90 backdrop-blur-lg 
      border border-base-300 rounded-2xl shadow-lg"
      >
        <div className="flex justify-around py-2">
          <NavItem icon="home" label="Home" active />

          <NavItem icon="grid_view" label="Browse" />

          <NavItem icon="favorite" label="Saved" />

          <NavItem icon="shopping_bag" label="Orders" />

          <NavItem icon="person" label="Profile" />
        </div>
      </div>
    </nav>
  )
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center text-xs 
    gap-1 px-3 py-1 transition 
    ${active ? 'text-primary' : 'text-base-content/60'}`}
    >
      <span className="material-symbols-outlined text-[22px]">{icon}</span>

      {label}
    </button>
  )
}

export default MobileBottomNav
