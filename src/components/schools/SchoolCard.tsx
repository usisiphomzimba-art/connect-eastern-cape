import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Users, Calendar } from "lucide-react";
import type { School } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function SchoolCard({ school }: { school: School }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div
          aria-hidden
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary font-bold"
        >
          {initials(school.name)}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold">{school.name}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {school.town} · {school.district}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">{school.description}</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="gap-1">
            <Calendar className="h-3 w-3" aria-hidden /> Ages {school.ageMin}–{school.ageMax}
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" aria-hidden /> {school.gender}
          </Badge>
          {school.admissionOpen ? (
            <Badge className="bg-success text-success-foreground hover:bg-success">Admissions open</Badge>
          ) : (
            <Badge variant="outline">Waiting list</Badge>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <a
            href={`tel:${school.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="h-4 w-4" aria-hidden /> {school.phone}
          </a>
          <Button asChild size="sm">
            <Link to="/schools/$id" params={{ id: school.id }}>
              View details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
