import { Check, Star, TrendingUp, Zap } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$100",
    subtitle: "Pause or cancel anytime",
    description: "The starter is the perfect plan for small creators.",
    button: "Launch your idea!",
    icon: Star,
    accent: "text-sky-300",
    features: [
      "6 pieces of social media content",
      "Basic editing mood",
      "Subtitles included",
      "1 revision for your review per each content",
      "SEO for organic growth",
      "Publishing calendar",
      "Personality identification",
      "Brand guideline",
    ],
  },
  {
    name: "Icon",
    price: "$355",
    subtitle: "Pause or cancel anytime",
    description:
      "The Icon is the perfect plan for personal brand builders to drive traffic on to your business.",
    button: "Build your brand!",
    icon: TrendingUp,
    accent: "text-sky-400",
    features: [
      "12 pieces of social media content",
      "Pro editing mood",
      "Subtitles included",
      "1 revision for your review per each content",
      "SEO for organic growth",
      "Publishing calendar",
      "Personality identification",
      "Brand guideline",
    ],
  },
  {
    name: "Viral",
    price: "$555",
    subtitle: "Pause or cancel anytime",
    description:
      "The Viral plan is ideal for personal brand builders to boost traffic and maintain a continuous viral presence on social media.",
    button: "Go to the next level!",
    icon: Zap,
    accent: "text-blue-500",
    features: [
      "20 pieces of social media content",
      "Aggressive editing mood",
      "Subtitles included",
      "1 revision for your review per each content",
      "SEO for organic growth",
      "Publishing calendar",
      "Personality identification",
      "Brand guideline",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] px-6 py-24 text-black lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="gsap-fade-up mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-black/45">
              Pricing
            </p>

            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Simple monthly packages for creators and personal brands.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/55">
            Choose a package based on how much content you need every month.
            Each plan is built for consistent social media growth.
          </p>
        </div>

        {/* Cards */}
        <div className="gsap-stagger grid gap-5 lg:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="gsap-card group transform-gpu rounded-3xl border border-black/10 bg-[#0d0d0d] p-7 text-white transition-colors duration-300 hover:bg-black md:p-8"
              >
                {/* Top */}
                <div className="mb-12 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[0.28em]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-white/45">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="min-h-[72px] text-sm leading-6 text-white/60">
                  {item.description}
                </p>

                {/* Price */}
                <div className="mt-10">
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-5xl font-semibold tracking-tight ${item.accent}`}
                    >
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-white/45">/ monthly</p>
                  <p className="mt-4 text-xs text-white/35">
                    Pause or cancel anytime
                  </p>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/80"
                >
                  {item.button}
                </a>

                {/* Included */}
                <div className="mt-10">
                  <h4 className="mb-6 text-2xl font-semibold tracking-tight">
                    What&apos;s included:
                  </h4>

                  <div className="space-y-4">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                          <Check size={12} />
                        </div>

                        <p className="text-sm font-medium leading-6 text-sky-200/80">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}