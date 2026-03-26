import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Fatih Moschee Mülheim an der Ruhr',
  description: 'Willkommen in der Fatih Moschee Mülheim an der Ruhr (DITIB).',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
