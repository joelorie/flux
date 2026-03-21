import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import MobileBottomNav from '../components/MobileBottomNav';

const IMAGES = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
  "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1976",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1976"
];

const ProductDetailsPage = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Auto-scrolling Gallery Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const relatedProducts = [
    { id: 1, name: 'Flux Audio Pro', category: 'Accessories', price: '$129', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070' },
    { id: 2, name: 'Flux Phone X', category: 'Phones', price: '$899', rating: 4.9, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080' },
    { id: 3, name: 'Flux Lite', category: 'Watches', price: '$149', rating: 4.5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070' },
  ];

  return (
    <div className="min-h-screen bg-base-100 pb-20 md:pb-0">
      {/* Navbar - hidden on desktop if you use a side/top mega menu, but kept here for consistency */}
      <div className="sticky top-0 z-50 navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 px-4">
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold md:ml-4">Product Details</h2>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-ghost btn-circle hidden md:flex">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="btn btn-ghost btn-circle">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Image Gallery (Sticky on Desktop) */}
          <div className="md:sticky md:top-28 h-fit">
            <div className="relative aspect-4/5 bg-base-200 overflow-hidden md:rounded-3xl transition-all">
              <img
                src={IMAGES[currentImg]}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                alt="Product View"
              />
              <button className="btn btn-circle bg-base-100/90 absolute top-4 right-4 border-none shadow-md md:hidden">
                <span className="material-symbols-outlined text-rose-500 fill-current">favorite</span>
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                {IMAGES.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`h-1.5 transition-all rounded-full ${currentImg === i ? 'w-8 bg-primary' : 'w-2 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="px-6 md:px-0">
            <div className="flex justify-between items-start mb-2">
              <span className="badge badge-outline opacity-60 uppercase tracking-widest text-[10px] font-bold">Flux Premium</span>
              <div className="badge badge-soft badge-warning gap-1 font-bold">
                <span className="material-symbols-outlined text-sm">star</span> 4.9
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-2">Flux S1</h1>
            <p className="text-3xl font-bold text-primary mb-6">$249.00</p>

            <div className="flex items-center gap-3 mb-8">
              <div className="avatar-group -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="avatar size-10 border-base-100 border-2">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium opacity-70 underline cursor-pointer">1,240 verified reviews</span>
            </div>

            <div className="divider opacity-50"></div>

            <div className="space-y-8">
              {/* Description */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest opacity-50 mb-3">Product Overview</h3>
                <p className="leading-relaxed text-lg opacity-80">
                  The Flux S1 redefines what a wearable can be. Featuring a stunning
                  1.9-inch LTPO OLED display, aerospace-grade titanium casing, and
                  industry-leading health sensors.
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-10">
                <div className="form-control">
                  <label className="label text-xs font-bold opacity-50 uppercase tracking-tighter">Quantity</label>
                  <div className="join bg-base-200 p-1 rounded-2xl">
                    <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="btn btn-ghost btn-sm join-item">-</button>
                    <span className="w-12 flex items-center justify-center font-bold text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(q => q+1)} className="btn btn-ghost btn-sm join-item">+</button>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label text-xs font-bold opacity-50 uppercase tracking-tighter">Finish</label>
                  <div className="flex gap-4 items-center mt-1">
                    <input type="radio" name="clr" className="radio border-slate-900 bg-slate-900 checked:bg-slate-900" defaultChecked />
                    <input type="radio" name="clr" className="radio border-slate-300 bg-slate-300 checked:bg-slate-300" />
                    <input type="radio" name="clr" className="radio border-indigo-600 bg-indigo-600 checked:bg-indigo-600" />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="btn btn-primary flex-1 btn-lg rounded-2xl shadow-xl shadow-primary/20 normal-case text-lg font-bold">
                  Add to Cart
                </button>
                <button className="btn btn-outline btn-lg rounded-2xl px-8 hidden md:flex">
                  <span className="material-symbols-outlined mr-2">bookmark</span> Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 px-6 md:px-0">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-3xl font-black">Pairs well with</h3>
              <p className="opacity-60 text-sm">Complete your Flux ecosystem</p>
            </div>
            <button className="btn btn-link no-underline text-primary">View Collection</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showRating showCart />
            ))}
          </div>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default ProductDetailsPage;