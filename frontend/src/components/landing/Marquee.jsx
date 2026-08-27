import { useLang } from "@/i18n";

export default function Marquee() {
  const { t } = useLang();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="overflow-hidden border-y border-line bg-obsidian py-6 md:py-8" data-testid="editorial-marquee">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap md:gap-16">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10 md:gap-16" aria-hidden={half === 1}>
            {row.map((p, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10 md:gap-16">
                <span className={`font-display text-3xl uppercase md:text-5xl ${i % 2 === 0 ? "text-white/90" : "text-outline-volt"}`}>
                  {p}
                </span>
                <span className="h-2 w-2 rotate-45 bg-volt" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
