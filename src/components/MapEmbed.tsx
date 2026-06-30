interface MapEmbedProps {
  query: string;
  title?: string;
  className?: string;
}

export function MapEmbed({ query, title = "Map location", className }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-muted ${className ?? ""}`}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full"
        allowFullScreen
      />
    </div>
  );
}
