import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-emerald-950 text-emerald-50">
      {/* Contact Info & Map */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-emerald-900 font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-wide text-white">Fatih Moschee</span>
                <span className="text-sm text-amber-400 tracking-wider uppercase">DITIB Mülheim</span>
              </div>
            </div>
            
            <p className="text-emerald-200/80 mb-8 max-w-md leading-relaxed">
              Die DITIB Fatih Moschee in Mülheim an der Ruhr ist ein Ort des Glaubens, der Gemeinschaft und des interkulturellen Austauschs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Adresse</h4>
                  <p className="text-emerald-200/80">Musterstraße 123<br />45468 Mülheim an der Ruhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Telefon</h4>
                  <p className="text-emerald-200/80">+49 (0) 208 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">E-Mail</h4>
                  <p className="text-emerald-200/80">info@fatih-moschee-mh.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-emerald-800/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39768.61864149957!2d6.840484732152865!3d51.42738766159676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c105ab1965f3%3A0x42760fc4a2a74c0!2sM%C3%BClheim%20an%20der%20Ruhr!5e0!3m2!1sen!2sde!4v1709654321000!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-900 bg-emerald-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-emerald-400/60 text-center md:text-left">
            © {new Date().getFullYear()} DITIB Fatih Moschee Mülheim an der Ruhr. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-emerald-400/60 hover:text-amber-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-emerald-400/60 hover:text-amber-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-emerald-400/60 hover:text-amber-400 transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex gap-4 text-sm text-emerald-400/60">
            <a href="#" className="hover:text-amber-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
