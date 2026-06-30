import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { HandHeart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Autism Connect EC" },
      { name: "description", content: "Volunteer with Autism Connect Eastern Cape to support families and schools." },
      { property: "og:title", content: "Become a Volunteer" },
      { property: "og:description", content: "Lend your time and skills to help autistic children in the Eastern Cape." },
    ],
  }),
  component: VolunteerPage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  area: z.string().trim().min(2, "Please enter your area or district").max(100),
  skills: z.string().trim().min(2, "Tell us your skills").max(500),
  profession: z.string().trim().max(100).optional().or(z.literal("")),
  availability: z.string().trim().min(2, "Tell us your availability").max(200),
  reason: z.string().trim().min(10, "Please share why you'd like to volunteer (at least 10 chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

function VolunteerPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", phone: "", area: "", skills: "", profession: "", availability: "", reason: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Volunteer application", values);
    toast.success("Thank you! Your volunteer application has been received.");
    form.reset();
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
          <HandHeart className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">Become a volunteer</h1>
          <p className="mt-2 text-muted-foreground">
            Share your time, skills, or profession to support autistic children and their families across the Eastern Cape.
          </p>
        </div>
      </header>

      <Card className="mt-8">
        <CardHeader><CardTitle>Volunteer application</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" error={form.formState.errors.fullName?.message}>
              <Input {...form.register("fullName")} autoComplete="name" />
            </Field>
            <Field label="Email" error={form.formState.errors.email?.message}>
              <Input type="email" {...form.register("email")} autoComplete="email" />
            </Field>
            <Field label="Phone number" error={form.formState.errors.phone?.message}>
              <Input type="tel" {...form.register("phone")} autoComplete="tel" />
            </Field>
            <Field label="Area / district" error={form.formState.errors.area?.message}>
              <Input {...form.register("area")} />
            </Field>
            <Field label="Profession (optional)" error={form.formState.errors.profession?.message}>
              <Input {...form.register("profession")} />
            </Field>
            <Field label="Availability" error={form.formState.errors.availability?.message}>
              <Input placeholder="e.g. Weekends, weekday afternoons" {...form.register("availability")} />
            </Field>
            <Field label="Skills" className="sm:col-span-2" error={form.formState.errors.skills?.message}>
              <Input placeholder="e.g. teaching, driving, music, admin" {...form.register("skills")} />
            </Field>
            <Field label="Why would you like to volunteer?" className="sm:col-span-2" error={form.formState.errors.reason?.message}>
              <Textarea rows={5} {...form.register("reason")} />
            </Field>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                Submit application
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
