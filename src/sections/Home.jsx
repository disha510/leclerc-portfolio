export default function Home() {
  return (
    <section 
      id="home" className="h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      >
      <div className="absolute inset-0 opacity-80">
      <iframe 
        className="w-full h-full object-cover" 
      src= "https://www.youtube.com/embed/MzKfOvZxNko?autoplay=1&mute=1&loop=1&playlist=MzKfOvZxNko"
        frameBorder="0" 
      allow="autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        />
      </div>
      <div className="relative z-10 text-center text white px-4 max-w-3xl">
      <h1>className="text-5xl md:text-6xl font-bold text-red-600 drop-shadow-xl fade-in"</h1>
      Charles Leclerc
      <p className="text-xl md:text-2xl mt-4 italic text-white drop-shadow-md fade-in delay-300">
      "Every race is a chance to push limits."
      </p>
      <a
        href="#timeline"
        className="mt-6 inline-block bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition-colors fade-in delay-500"
        >
      See Career Timeline 
      </a>
      </div>
        <style>
          {`
          @keyframes fadeIn{
          from{ opacity:0; transform:translateY(20px);}
          to{opacity:1;transform:translateY(0);}
          }
          .fade-in{
          animation:fadeIn 1s ease forwards;
          }
          .delay-300{animation-delay:0.3s;}
          .delay-500{animation-delay:0.5s;}
          `}
        </style>
      </section>
      );
}

