import { useState, useEffect } from 'react'

const SLIDES = [
  {
    title: (
      <>
        Summer Minimal <br /> Collection 2024
      </>
    ),
    subtitle:
      'Experience purity in design. High-quality essentials for your modern lifestyle.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    tag: 'New Arrival',
  },
  {
    title: (
      <>
        Tech Essentials <br /> for Creators
      </>
    ),
    subtitle:
      'Seamlessly integrate productivity into your workspace with our curated desk setup.',
    image:
      'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2070',
    tag: 'Tech Series',
  },
  {
    title: (
      <>
        Modern Living <br /> Reimagined
      </>
    ),
    subtitle:
      'Furniture that blends form and function. Elevate your home sanctuary.',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2070',
    tag: 'Home Decor',
  },
]

const HeroBanner = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))
    }, 5000) // Changes every 5 seconds

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <div className="px-4 py-6">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="hero min-h-112.5 md:min-h-137.5 rounded-3xl overflow-hidden relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${SLIDES[current].image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Darker gradient for better text pop in Dark Mode */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="hero-content relative z-10 text-white w-full justify-start p-8 md:p-20">
          {/* Key allows React to trigger animations when content changes */}
          <div
            key={current}
            className="max-w-xl animate-in fade-in slide-in-from-left-4 duration-700"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {SLIDES[current].tag}
            </span>

            <h1 className="mt-4 mb-4 text-4xl md:text-6xl font-bold leading-tight">
              {SLIDES[current].title}
            </h1>

            <p className="mb-10 text-sm md:text-lg opacity-80 leading-relaxed max-w-md">
              {SLIDES[current].subtitle}
            </p>

            <button className="btn btn-primary px-10 rounded-2xl normal-case font-bold hover:scale-105 transition-all">
              Shop Now
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                current === index
                  ? 'w-10 bg-primary'
                  : 'w-4 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
