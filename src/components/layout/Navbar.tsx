import { Link } from "@tanstack/react-router";
import { Menu, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/schools", label: "Schools" },
  { to: "/activities", label: "Activities" },
  { to: "/psychologists", label: "Psychologists" },
  { to: "/clinics", label: "Clinics" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-bold">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Heart className="h-5 w-5" aria-hidden />
          </span>
          <span className="truncate text-base sm:text-lg">
            Autism Connect <span className="text-primary">EC</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-accent text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="min-h-11 min-w-11">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-2" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "bg-accent text-foreground" }}
                    className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
