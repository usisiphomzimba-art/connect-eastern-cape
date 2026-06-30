import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Phone, GraduationCap, Brain, Stethoscope, HandHeart, Activity, FileCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { schools } from "@/data/schools";
import { SchoolCard } from "@/components/schools/SchoolCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autism Connect Eastern Cape — Find Schools & Support" },
      { name: "description", content: "Helping families find autism schools, therapy and support services across the Eastern Cape." },
      { property: "og:title", content: "Autism Connect Eastern Cape" },
      { property: "og:description", content: "Find autism schools, psychologists, clinics and support across the Eastern Cape." },
    ],
  }),
  component: HomePage,
});

const quickAccess = [
  { to: "/schools" as const, label: "Autism Schools", icon: GraduationCap, color: "bg-primary-soft text-primary" },
  { to: "/psychologists" as const, label: "Psychologists", icon: Brain, color: "bg-success/20 text-success-foreground" },
  { to: "/clinics" as const, label: "Clinics", icon: Stethoscope, color: "bg-destructive/15 text-destructive" },
  { to: "/volunteer" as const, label: "Volunteer", icon: HandHeart, color: "bg-primary-soft text-primary" },
  { to: "/activities" as const, label: "Activities", icon: Activity, color: "bg-success/20 text-success-foreground" },
  { to: "/schools" as const, label: "Application Guide", icon: FileCheck, color: "bg-accent text-accent-foreground" },
];

function HomePage() {
  const [q, setQ] = useState("");
  const featured = schools.filter((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-soft/60 via-background to-success/15"
        />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
              Eastern Cape · South Africa
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Helping families find autism support across the Eastern Cape.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Search schools, psychologists, clinics, and child activities — all in one place.
              Built with care for parents, guardians, caregivers, and communities.
            </p>

            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/schools${q ? `?q=${encodeURIComponent(q)}` : ""}`;
              }}
              className="mt-7 flex max-w-xl gap-2 rounded-2xl bg-background/90 p-2 shadow-lg ring-1 ring-border"
            >
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-5 w-5 text-muted-foreground" aria-hidden />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search schools, towns, districts…"
                  className="border-0 bg-transparent text-base shadow-none focus-visible:ring-0"
                  aria-label="Search"
                />
              </div>
              <Button type="submit" size="lg" className="shrink-0">Search</Button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/schools">Browse schools</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/activities">Explore activities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="grid items-center gap-4 p-5 sm:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-destructive text-destructive-foreground">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 className="text-base font-semibold">In an emergency?</h2>
                <p className="text-sm text-muted-foreground">
                  Ambulance <a href="tel:10177" className="font-medium text-foreground hover:underline">10177</a> ·
                  Police <a href="tel:10111" className="font-medium text-foreground hover:underline"> 10111</a> ·
                  Childline <a href="tel:116" className="font-medium text-foreground hover:underline"> 116</a>
                </p>
              </div>
            </div>
            <Button asChild variant="destructive" className="min-h-11">
              <Link to="/clinics">All emergency contacts</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Quick access */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Quick access</h2>
        <p className="mt-1 text-sm text-muted-foreground">Find what you need in one tap.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {quickAccess.map((q) => (
            <Link
              key={q.label}
              to={q.to}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${q.color}`}>
                <q.icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-sm font-semibold">{q.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured schools */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured schools</h2>
            <p className="mt-1 text-sm text-muted-foreground">Trusted autism-friendly schools in the Eastern Cape.</p>
          </div>
          <Link to="/schools" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            See all <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <SchoolCard key={s.id} school={s} />
          ))}
        </div>
      </section>
    </>
  );
}
