import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen video background */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/HeroImage2.png"
    
       
      
        aria-label="عرض تجريبي لتطبيق سالوس"
      />

    <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />


      <Navbar variant="overlay" />


      <div className="relative z-10 flex h-full flex-col items-start justify-center px-14 text-start">
        <span className="mb-6 rounded-full border border-cream/40 bg-white/10 px-4 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
          جديد
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-relaxed mb-2 text-cream md:text-6xl">
         دواؤك أقرب
          <br />
         مما تتخيل
        </h1>
        <p className="mt-6 max-w-xl text-balance leading-8 text-cream/85 md:text-lg">
          ابحث عن الأدوية قارن الأسعار <br/>واعرف اين توفر في أقرب الصيدليات 
        </p>
        <button className="mt-9 flex items-center gap-2 rounded-full bg-cream/95 text-moss-800 px-5 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-moss-800 hover:text-cream">
          شاهد كيف يعمل سالوس
         <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Play">
          <defs>
            <radialGradient id="halo" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#E8E2CF" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#E8E2CF" stop-opacity="0" />
            </radialGradient>
          </defs>


          <circle cx="60" cy="60" r="58" fill="url(#halo)" />

          <circle cx="60" cy="60" r="44" fill="#F4F1E7" />

          <circle cx="60" cy="60" r="30" fill="#A38F5B" />


          <path
            d="M54 49.5 L54 70.5 L72 60 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
