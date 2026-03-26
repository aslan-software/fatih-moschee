import { Clock, Calendar } from 'lucide-react';

export default function PrayerTimes() {
  // Mock data for prayer times
  const prayerTimes = [
    { name: 'Fajr (Morgen)', time: '05:23', arabic: 'الفجر' },
    { name: 'Shuruq (Sonnenaufgang)', time: '06:58', arabic: 'الشروق' },
    { name: 'Dhuhr (Mittag)', time: '13:34', arabic: 'الظهر', current: true },
    { name: 'Asr (Nachmittag)', time: '16:45', arabic: 'العصر' },
    { name: 'Maghrib (Abend)', time: '20:01', arabic: 'المغرب' },
    { name: 'Isha (Nacht)', time: '21:24', arabic: 'العشاء' },
  ];

  const today = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="prayer-times" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">Gebetszeiten</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            &quot;Wahrlich, das Gebet ist den Gläubigen zu bestimmten Zeiten vorgeschrieben.&quot; (Koran 4:103)
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-emerald-900 text-white p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="text-amber-400" />
              <span className="font-medium text-lg">{today}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-amber-400" />
              <span className="font-medium text-lg">Mülheim an der Ruhr</span>
            </div>
          </div>

          <div className="p-0 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 sm:gap-4">
              {prayerTimes.map((prayer, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-4 flex flex-row lg:flex-col justify-between lg:justify-center items-center border-b sm:border-none last:border-0 ${
                    prayer.current
                      ? 'bg-emerald-50 border-emerald-200 sm:rounded-xl shadow-inner'
                      : 'hover:bg-slate-50 sm:rounded-xl transition-colors'
                  }`}
                >
                  <div className="text-left lg:text-center">
                    <h3 className={`font-semibold text-lg ${prayer.current ? 'text-emerald-700' : 'text-slate-800'}`}>
                      {prayer.name.split(' ')[0]}
                    </h3>
                    <p className="text-xs text-slate-500 hidden lg:block">{prayer.name.split(' ')[1]?.replace(/[()]/g, '')}</p>
                    <p className="text-sm font-serif text-amber-600 mt-1">{prayer.arabic}</p>
                  </div>
                  <div className={`text-2xl font-bold lg:mt-4 ${prayer.current ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {prayer.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 text-center text-sm text-slate-500 border-t border-slate-100">
            Die Zeiten basieren auf der DITIB-Berechnungsmethode. Freitagsgebet (Jumu&apos;ah) findet um 14:00 Uhr statt.
          </div>
        </div>
      </div>
    </section>
  );
}
