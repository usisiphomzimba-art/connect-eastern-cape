import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Heart className="h-5 w-5" aria-hidden />
            </span>
            Autism Connect EC
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Helping families across the Eastern Cape find autism schools, therapy, and support services.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/schools" className="hover:text-foreground">Schools Directory</Link></li>
            <li><Link to="/activities" className="hover:text-foreground">Child Activities</Link></li>
            <li><Link to="/psychologists" className="hover:text-foreground">Psychologists</Link></li>
            <li><Link to="/volunteer" className="hover:text-foreground">Volunteer</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Emergency Numbers</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Ambulance: <a className="hover:text-foreground" href="tel:10177">10177</a></li>
            <li>Police: <a className="hover:text-foreground" href="tel:10111">10111</a></li>
            <li>Childline: <a className="hover:text-foreground" href="tel:116">116</a></li>
            <li>SADAG: <a className="hover:text-foreground" href="tel:0800567567">0800 567 567</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> Eastern Cape, South Africa</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden /> <a href="tel:0413731234" className="hover:text-foreground">041 373 1234</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden /> <a href="mailto:hello@autismconnectec.org.za" className="hover:text-foreground">hello@autismconnectec.org.za</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background text-muted-foreground hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background text-muted-foreground hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background text-muted-foreground hover:text-primary"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Autism Connect Eastern Cape. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
