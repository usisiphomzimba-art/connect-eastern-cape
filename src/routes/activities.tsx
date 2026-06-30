import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/data/activities";
import { schools } from "@/data/schools";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Child Activities — Autism Connect EC" },
      { name: "description", content: "Therapeutic activities and programmes for autistic children across the Eastern Cape." },
      { property: "og:title", content: "Child Activities" },
      { property: "og:description", content: "Speech, OT, music therapy, swimming, art and more — for autistic children." },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Child activities</h1>
        <p className="mt-2 text-muted-foreground">
          Therapeutic and developmental activities offered by autism schools across the Eastern Cape.
        </p>
      </header>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => {
          const offering = schools.filter((s) => a.schoolsOffering.includes(s.id));
          return (
            <Card key={a.id} className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-2xl">{a.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{a.name}</CardTitle>
                    <p className="mt-1 text-xs text-muted-foreground">Recommended age: {a.ageRange}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                {offering.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Offered at</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {offering.map((s) => <Badge key={s.id} variant="secondary">{s.name}</Badge>)}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
