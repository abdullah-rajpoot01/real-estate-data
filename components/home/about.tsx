import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const aboutSection = {
  heading: "About Our Firm",
  subheading: "Trusted legal experts with a commitment to justice and client success.",
  description:
    "We are a professional law firm specializing in criminal, civil, family, property, and corporate law. With years of experience, we provide reliable legal solutions with integrity and dedication.",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Cases Won", value: "500+" },
  ],
  cta: {
    label: "Learn More",
    link: "/about",
  },
   highlights : [
  "Client-first approach in every case",
  "Transparent communication throughout",
  "Proven track record of results",
]
};

const highlights = [
  "Client-first approach in every case",
  "Transparent communication throughout",
  "Proven track record of results",
];

export default function AboutSection() {
  const { heading, subheading, description, stats, cta } = aboutSection;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* LEFT — Stats block */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <div className="relative">

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#0a2240]/10 rounded-2xl z-0" />

              {/* Main card */}
              <div className="relative z-10 bg-[#0a2240] rounded-2xl p-8 flex flex-col gap-8">

                {/* Stats row */}
                <div className="flex gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex-1 border-l-2 border-[#c9a84c] pl-4">
                      <p className="text-4xl font-bold text-white font-serif leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/50 font-light">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Highlights */}
                <div className="flex flex-col gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240] self-start">
              <ShieldCheck className="w-4 h-4" />
              About Us
            </span>

            {/* Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a2240] leading-tight mb-4 font-serif">
                {heading}
              </h2>
              <div className="w-16 h-0.5 bg-[#0a2240] mb-5 rounded-full" />
            </div>

            {/* Subheading */}
            <p className="text-lg font-semibold text-[#0a2240]/80 leading-snug -mt-2">
              {subheading}
            </p>

            {/* Description */}
            <p className="text-base text-gray-500 font-light leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <Link
              href={cta.link}
              className="group inline-flex items-center gap-2.5 self-start px-6 py-3.5 rounded-xl font-semibold text-base bg-[#0a2240] text-white border-2 border-[#0a2240] no-underline transition-all duration-300 hover:bg-[#0e2f5a] hover:shadow-lg hover:shadow-[#0a2240]/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}