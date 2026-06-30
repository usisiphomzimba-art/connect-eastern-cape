import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { schools, districts } from "@/data/schools";
import { SchoolCard } from "@/components/schools/SchoolCard";

export const Route = createFileRoute("/schools/")({
  head: () => ({
    meta: [
      { title: "Autism Schools Directory — Autism Connect EC" },
      { name: "description", content: "Browse autism schools across the Eastern Cape. Filter by district, town, age, and gender." },
      { property: "og:title", content: "Autism Schools Directory" },
      { property: "og:description", content: "Find the right autism school for your child in the Eastern Cape." },
    ],
  }),
  component: SchoolsPage,
});

function SchoolsPage() {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("all");
  const [town, setTown] = useState("all");
  const [age, setAge] = useState("all");
  const [gender, setGender] = useState("all");

  const towns = useMemo(
    () => Array.from(new Set(schools.map((s) => s.town))).sort(),
    [],
  );

  const filtered = schools.filter((s) => {
    const text = `${s.name} ${s.town} ${s.district} ${s.description}`.toLowerCase();
    if (q && !text.includes(q.toLowerCase())) return false;
    if (district !== "all" && s.district !== district) return false;
    if (town !== "all" && s.town !== town) return false;
    if (gender !== "all" && s.gender !== gender) return false;
    if (age !== "all") {
      const a = parseInt(age, 10);
      if (a < s.ageMin || a > s.ageMax) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Schools directory</h1>
        <p className="mt-2 text-muted-foreground">
          {schools.length} autism-friendly schools across the Eastern Cape. Use the filters below to narrow your search.
        </p>
      </header>

      <div className="mt-6 grid gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="relative sm:col-span-2 lg:col-span-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search schools or towns…"
            className="pl-9"
            aria-label="Search schools"
          />
        </div>
        <Select value={district} onValueChange={setDistrict}>
          <SelectTrigger aria-label="District"><SelectValue placeholder="District" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All districts</SelectItem>
            {districts.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={town} onValueChange={setTown}>
          <SelectTrigger aria-label="Town"><SelectValue placeholder="Town" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All towns</SelectItem>
            {towns.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="grid grid-cols-2 gap-3">
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger aria-label="Age"><SelectValue placeholder="Age" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any age</SelectItem>
              {[3, 5, 7, 9, 11, 13, 15, 17].map((n) => <SelectItem key={n} value={String(n)}>{n} yrs</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger aria-label="Gender"><SelectValue placeholder="Gender" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="Mixed">Mixed</SelectItem>
              <SelectItem value="Boys">Boys</SelectItem>
              <SelectItem value="Girls">Girls</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{filtered.length} result{filtered.length === 1 ? "" : "s"}</p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => <SchoolCard key={s.id} school={s} />)}
      </div>
      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border bg-muted/40 p-10 text-center text-muted-foreground">
          No schools match your filters. Try clearing one.
        </div>
      )}
    </div>
  );
}
