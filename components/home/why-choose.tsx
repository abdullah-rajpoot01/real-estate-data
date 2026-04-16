import {
  ShieldCheck,
  Gavel,
  Users,
  Banknote,
  TrendingUp,
} from "lucide-react";

const whyChooseUsSection = {
  heading: "Why Choose Us",
  subheading:
    "We are committed to delivering trusted, reliable, and result-driven legal services.",
  points: [
    {
      title: "Experienced Lawyers",
      description: "Our team has years of experience handling complex legal cases.",
    },
    {
      title: "Strong Case Strategy",
      description: "We carefully analyze every case and build a strong legal strategy.",
    },
    {
      title: "Client-Focused Approach",
      description: "We prioritize our clients and keep them informed at every step.",
    },
    {
      title: "Affordable Legal Services",
      description: "We provide high-quality legal help at reasonable and transparent fees.",
    },
    {
      title: "High Success Rate",
      description: "We have a strong record of successful case outcomes.",
    },
  ],
};

const POINT_ICONS = [ShieldCheck, Gavel, Users, Banknote, TrendingUp];

export default function WhyChooseUsSection() {
  const { heading, subheading, points } = whyChooseUsSection;

  return (
    <section className="bg-[#0a2240] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-24 items-start">

          {/* LEFT — sticky heading */}
          <div className="flex-1  flex flex-col gap-6 max-w-sm">
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-white/10 text-white/80 self-start">
              <ShieldCheck className="w-4 h-4" />
              Why Us
            </span>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-serif">
                {heading}
              </h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-5 rounded-full" />
              <p className="text-base text-white/50 font-light leading-relaxed">
                {subheading}
              </p>
            </div>
          </div>

          {/* RIGHT — points list */}
          <div className="flex-1 flex flex-col divide-y divide-white/10">
            {points.map((point, index) => {
              const Icon = POINT_ICONS[index % POINT_ICONS.length];
              return (
                <div
                  key={point.title}
                  className="group flex items-start gap-5 py-7 first:pt-0 last:pb-0 transition-all duration-300 cursor-default"
                >
                  {/* Number + icon stack */}
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0 w-10">
                    <span className="text-xs font-semibold text-[#c9a84c]/60 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:scale-110">
                      <Icon className="w-4 h-4 text-white/40 transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1 pt-1">
                    <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-[#c9a84c]">
                      {point.title}
                    </h3>
                    <p className="text-sm text-white/45 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Right arrow indicator */}
                  <div className="ml-auto pl-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}