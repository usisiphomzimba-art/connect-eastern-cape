import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Autism Connect EC" },
      { name: "description", content: "Get in touch with Autism Connect Eastern Cape." },
      { property: "og:title", content: "Contact Autism Connect EC" },
      { property: "og:description", content: "Reach out with questions, partnerships, or support requests." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Enter a subject").max(150),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Contact form", values);
    toast.success("Thanks — we'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Get in touch</h1>
        <p className="mt-2 text-muted-foreground">
          Questions, partnerships, or want to list your school? We'd love to hear from you.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Send us a message</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={form.formState.errors.name?.message}>
                <Input {...form.register("name")} autoComplete="name" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} autoComplete="email" />
              </Field>
              <Field label="Phone (optional)" error={form.formState.errors.phone?.message}>
                <Input type="tel" {...form.register("phone")} autoComplete="tel" />
              </Field>
              <Field label="Subject" error={form.formState.errors.subject?.message}>
                <Input {...form.register("subject")} />
              </Field>
              <Field label="Message" className="sm:col-span-2" error={form.formState.errors.message?.message}>
                <Textarea rows={6} {...form.register("message")} />
              </Field>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>Send message</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Office details</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> Eastern Cape Province, South Africa</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden /> <a className="hover:underline" href="tel:0413731234">041 373 1234</a></p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden /> <a className="hover:underline" href="mailto:hello@autismconnectec.org.za">hello@autismconnectec.org.za</a></p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Follow us</p>
              <div className="mt-2 flex gap-2">
                <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-accent"><Facebook className="h-4 w-4" /></a>
                <a aria-label="Twitter" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-accent"><Twitter className="h-4 w-4" /></a>
                <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-accent"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
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
