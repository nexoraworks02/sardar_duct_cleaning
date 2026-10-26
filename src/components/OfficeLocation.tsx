import { MapPin } from "lucide-react";
import type { Office } from "@/config/site";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

// "Our office" block for the dark province/city landing pages.
export function OfficeLocation({ office }: { office: Office }) {
  return (
    <section className="border-t border-white/5 py-16">
      <Container>
        <SectionHeading
          eyebrow="Visit us"
          title={`Our ${office.label} office`}
          subtitle="Come by or find us on the map."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B6CBF] to-[#AEBFD6] text-navy shadow-md">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {site.name}
                </p>
                <p className="mt-2 leading-relaxed text-slate-300">
                  {office.streetAddress}
                  <br />
                  {office.locality}, {office.region} {office.postalCode}
                  <br />
                  Canada
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={office.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[280px] w-full"
                title={`${site.name} ${office.label} office map`}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
