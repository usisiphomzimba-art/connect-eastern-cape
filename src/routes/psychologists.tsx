import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { psychologists } from "@/data/psychologists";

export const Route = createFileRoute("/psychologists")({
  head: () => ({
    meta: [
      { title: "Psychologists Directory — Autism Connect EC" },
      { name: "description", content: "Find psychologists with autism expertise across the Eastern Cape." },
      { property: "og:title", content: "Psychologists Directory" },
      { property: "og:description", content: "Search psychologists for autism assessments and family support." },
    ],
  }),
  component: PsychologistsPage,
});

function PsychologistsPage() {
  const [q, setQ] = useState("");
  const filtered = psychologists.filter((p) => {
    if (!q) return true;
    const text = `${p.name} ${p.practice} ${p.town} ${p.district} ${p.specializations.join(" ")}`.toLowerCase();
    return text.includes(q.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Psychologists</h1>
        <p className="mt-2 text-muted-foreground">
          Registered psychologists offering autism assessments, family therapy, and behavioural support.
        </p>
      </header>

      <div className="mt-6 max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, town or district…" className="pl-9" aria-label="Search psychologists" />
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.id} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{p.qualification}</p>
              <p className="text-sm font-medium">{p.practice}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="flex items-start gap-2 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {p.address}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden /> <a className="hover:underline" href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden /> <a className="hover:underline" href={`mailto:${p.email}`}>{p.email}</a></p>
              <p className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 shrink-0" aria-hidden /> {p.hours}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.specializations.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
              </div>
              <Button asChild variant="outline" size="sm" className="mt-2">
                <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${encodeURIComponent(p.mapsQuery)}`}>
                  <ExternalLink className="mr-2 h-4 w-4" /> View location
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border bg-muted/40 p-10 text-center text-muted-foreground">
          No psychologists match your search.
        </div>
      )}
    </div>
  );
}
