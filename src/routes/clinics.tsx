import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, AlertTriangle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { clinics, emergencyContacts } from "@/data/clinics";

export const Route = createFileRoute("/clinics")({
  head: () => ({
    meta: [
      { title: "Emergency Clinics & Contacts — Autism Connect EC" },
      { name: "description", content: "Nearby clinics, hospitals, and emergency contacts across the Eastern Cape." },
      { property: "og:title", content: "Emergency Clinics & Contacts" },
      { property: "og:description", content: "24-hour hospitals and emergency numbers for families across the Eastern Cape." },
    ],
  }),
  component: ClinicsPage,
});

function ClinicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Emergency clinics & contacts</h1>
        <p className="mt-2 text-muted-foreground">
          24-hour hospitals and critical emergency numbers for families across the Eastern Cape.
        </p>
      </header>

      <section className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden />
          <h2 className="text-xl font-semibold">Emergency contacts</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {emergencyContacts.map((e) => (
            <Card key={e.id} className="border-destructive/20">
              <CardContent className="flex items-start gap-4 p-5">
                <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-destructive/10 text-2xl">{e.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{e.name}</h3>
                  <p className="text-xs text-muted-foreground">{e.description}</p>
                  <Button asChild className="mt-3 min-h-11 w-full bg-destructive hover:bg-destructive/90">
                    <a href={`tel:${e.number.replace(/\s/g, "")}`}><Phone className="mr-2 h-4 w-4" aria-hidden /> Call {e.number}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Hospitals & clinics</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clinics.map((c) => (
            <Card key={c.id}>
              <CardHeader><CardTitle className="text-lg">{c.name}</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-start gap-2 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {c.address}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden /> <a className="hover:underline" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></p>
                <p className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 shrink-0" aria-hidden /> {c.hours}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button asChild size="sm" className="bg-destructive hover:bg-destructive/90">
                    <a href={`tel:${c.emergency}`}><Phone className="mr-2 h-4 w-4" /> Emergency {c.emergency}</a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${encodeURIComponent(c.mapsQuery)}`}>
                      <ExternalLink className="mr-2 h-4 w-4" /> Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
