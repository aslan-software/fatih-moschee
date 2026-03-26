import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-3xl transform -rotate-3 z-0"></div>
            <div className="absolute -inset-4 bg-amber-100/50 rounded-3xl transform rotate-2 z-0"></div>
            <div className="relative z-10 h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/community/800/1000"
                alt="Gemeinschaft in der Moschee"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="text-4xl font-bold text-emerald-800 mb-1">30+</div>
              <div className="text-sm text-slate-600 font-medium">Jahre in Mülheim</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Über Uns</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mt-2 mb-6">
              Unsere Geschichte & Mission
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Die Fatih Moschee in Mülheim an der Ruhr ist mehr als nur ein Ort des Gebets. Sie ist ein 
                Zentrum der Begegnung, der Bildung und des interkulturellen Dialogs. Seit unserer Gründung 
                unter dem Dach der DITIB (Türkisch-Islamische Union der Anstalt für Religion e.V.) setzen 
                wir uns für ein friedliches Zusammenleben in unserer Stadt ein.
              </p>
              <p>
                Unser Name &quot;Fatih&quot; (der Eroberer/der Öffnende) steht symbolisch für die Öffnung der Herzen 
                und die Brückenbildung zwischen verschiedenen Kulturen und Religionen. Wir bieten nicht nur 
                religiöse Dienste an, sondern engagieren uns auch stark in der Jugendarbeit, Frauenförderung 
                und sozialen Projekten.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Tägliche Gebete & Freitagsgebet',
                  'Koran- und Religionsunterricht',
                  'Jugend- und Frauenarbeit',
                  'Interreligiöser Dialog',
                  'Soziale Beratung',
                  'Kulturelle Veranstaltungen'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group"
              >
                Kontaktieren Sie uns
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
