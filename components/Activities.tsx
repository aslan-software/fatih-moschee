import Image from 'next/image';
import { CalendarDays, ArrowRight } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: 'Tag der offenen Moschee',
      date: '03. Oktober 2026',
      category: 'Veranstaltung',
      image: 'https://picsum.photos/seed/event1/600/400',
      excerpt: 'Lernen Sie unsere Gemeinde kennen. Wir laden alle Mülheimer Bürger herzlich zu Führungen und Dialog ein.',
    },
    {
      id: 2,
      title: 'Wochenend-Schule für Kinder',
      date: 'Jeden Samstag & Sonntag',
      category: 'Bildung',
      image: 'https://picsum.photos/seed/education/600/400',
      excerpt: 'Religionsunterricht, Koranlesen und Wertevermittlung für Kinder und Jugendliche in verschiedenen Altersgruppen.',
    },
    {
      id: 3,
      title: 'Benefiz-Kermes (Gemeindefest)',
      date: '15. - 16. Mai 2026',
      category: 'Gemeinschaft',
      image: 'https://picsum.photos/seed/food/600/400',
      excerpt: 'Genießen Sie türkische Spezialitäten, lernen Sie unsere Kultur kennen und unterstützen Sie unsere Moschee.',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Aktuelles</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mt-2">
              Neuigkeiten & Aktivitäten
            </h2>
          </div>
          <a href="#" className="text-emerald-700 font-medium hover:text-emerald-800 flex items-center gap-2 group">
            Alle Beiträge ansehen
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {activity.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <CalendarDays size={16} />
                  <span>{activity.date}</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3 line-clamp-2">
                  {activity.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {activity.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors">
                  Weiterlesen <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
