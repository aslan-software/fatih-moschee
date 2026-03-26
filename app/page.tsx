'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PrayerTimes from '@/components/PrayerTimes';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PrayerTimes />
      <About />
      <Activities />
      <Footer />
    </main>
  );
}
