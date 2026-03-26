import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/mosque/1920/1080?blur=2"
          alt="Fatih Moschee Mülheim"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="block text-amber-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
          Im Namen Allahs, des Allerbarmers, des Barmherzigen
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Willkommen in der <br />
          <span className="text-amber-400">Fatih Moschee</span> Mülheim
        </h1>
        <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto font-light">
          Ein Ort des Friedens, der Begegnung und des gemeinsamen Gebets im Herzen von Mülheim an der Ruhr.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#prayer-times"
            className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
          >
            Aktuelle Gebetszeiten
          </a>
          <a
            href="#about"
            className="bg-emerald-800/80 hover:bg-emerald-700 text-white border border-emerald-600 font-semibold px-8 py-3 rounded-md transition-all duration-300 backdrop-blur-sm"
          >
            Über uns erfahren
          </a>
        </div>
      </div>
    </section>
  );
}
