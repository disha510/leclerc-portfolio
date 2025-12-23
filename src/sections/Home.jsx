export default function Home() {
  return (
    <section 
      id="home" className="h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      >
      <div className="absolute inset-0 opacity-80">
      <iframe 
        className="w-full h-full object-cover" 
      src= "https://www.youtube.com/embed/ygxT9Vs8Vr0?autoplay=1&mute=1&loop=1&playlist=ygxT9Vs8Vr0"
        
      allow="autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        />
      </div>
      <div className="relative z-10 text-center text white px-4 max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-bold text-red-600 drop-shadow-xl fade-in"> </h1>
      Charles Leclerc
      <p className="text-xl md:text-2xl mt-4 italic text-white drop-shadow-md fade-in delay-300">
      "Every race is a chance to push limits."
      </p>
      </div>  
      </section>
      )
}

