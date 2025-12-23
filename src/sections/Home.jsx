export default function Home() {
  return (
    <section 
      id="home" className="h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      >
      <div className="absolute inset-0 opacity-80">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/13866461-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        
      </div>


      {/*Overlay so that ppl can see*/}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/*Text*/}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >
      <h1 
      ref={titleRef}
      className="text-6xl md:text-8xl uppercase font-title drop-shadow-xl fade-in
                transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_25px_#FF2800]"
      style={{color: "#FF2800" }}
      > 
      CHARLES LECLERC 
      </h1>
      
      <p className="mt-4 text-2xl md:text-3xl italic font-subtitle text-white drop-shadow-md fade-in delay-300 hover:drop-shadow-[0_0_15px_#FF2800] transition-all duration-300 ease-in-out">
      Every race is a chance to push limits
    
      </p>
      

      </div>
      {/* Fadein animation */}
      <style>{`
      @keyframes fadeIn { 
        from { opacity: 0; transform: translateY(20px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .fade-in { animation: fadeIn 1s ease forwards; }
      .delay-300 { animation-delay: 0.3s;}
      `}</style>
      </section>
  )
}
