import { Link } from "react-router-dom";
import { HERO_VIDEO, WORKS, PRICE } from "../data.js";

const FRAMES = WORKS.slice(1, 4);

export default function Pricing() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="w-full px-6 pb-24 pt-10 md:px-12 md:pt-16"
    >
      <h1
        id="pricing-heading"
        className="font-black uppercase leading-[0.95] tracking-[-0.045em] text-[clamp(40px,8.2vw,128px)]"
      >
        <span data-rise className="block">
          A visual loop
        </span>
        <span data-rise style={{ "--d": "120ms" }} className="block">
          starts at{" "}
          <span className="inline-block bg-ink px-[0.15em] text-ground">
            $80
          </span>
        </span>
      </h1>

      <div className="mt-14 grid items-end gap-10 md:mt-20 md:grid-cols-12">
        <p
          data-rise
          style={{ "--d": "240ms" }}
          className="max-w-[52ch] text-[18px] leading-[1.5] md:col-span-6"
        >
          Per finished minute of video — storyboarded, animated and graded in
          monochrome. Pick a tier below; add-ons are priced underneath.
        </p>
        <div className="flex flex-col items-start gap-4 md:col-span-6 md:items-end">
          <Link to="/contact" data-rise style={{ "--d": "320ms" }} className="btn">
            Request a quote
          </Link>
          <Link
            to="/contact"
            data-rise
            style={{ "--d": "380ms" }}
            className="tlink text-[16px] text-soft hover:text-ink"
          >
            Full identity and stage visuals, priced per project
          </Link>
        </div>
      </div>

      {/* Price list — one full-width row per tier */}
      <div className="mt-24 md:mt-32">
        <h2
          data-rise
          className="text-[clamp(32px,4.4vw,60px)] font-black uppercase leading-[0.95] tracking-[-0.04em]"
        >
          Price list
        </h2>
        <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
          {PRICE.tiers.map((t, i) => (
            <div
              key={t.name}
              data-rise
              style={{ "--d": `${60 + i * 50}ms` }}
              className="grid items-baseline gap-4 bg-[#f5f5f5] p-5 md:grid-cols-12 md:gap-8 md:bg-transparent md:p-0"
            >
              <h3 className="order-1 text-[clamp(32px,4.4vw,60px)] font-black uppercase leading-[0.95] tracking-[-0.04em] md:col-span-4">
                {t.name}
              </h3>
              <ul className="order-3 space-y-1 text-[16px] leading-[1.5] md:order-2 md:col-span-5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-block h-2 w-2 shrink-0 rounded-full bg-ink"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="order-2 md:order-3 md:col-span-3 md:text-right">
                {t.price ? (
                  <span className="block text-[clamp(32px,4.4vw,60px)] font-black leading-none tracking-[-0.04em] tabular-nums">
                    {t.price}
                  </span>
                ) : (
                  <span className="block max-w-[6ch] text-[clamp(32px,4.4vw,60px)] font-black uppercase leading-[0.95] tracking-[-0.04em] md:ml-auto">
                    On request
                  </span>
                )}
                <span className="mt-2 block text-[16px] text-soft">
                  {t.weeks}
                </span>
                <span className="block text-[16px] text-soft">
                  {PRICE.unit}
                </span>
              </p>
            </div>
          ))}
        </div>
        <p data-rise className="mt-8 max-w-[60ch] text-[16px] text-soft">
          * Character animation with layered artwork files — see add-ons.
        </p>
      </div>

      {/* Add-ons */}
      <div className="mt-24 md:mt-32">
        <h2
          data-rise
          className="text-[clamp(32px,4.4vw,60px)] font-black uppercase leading-[0.95] tracking-[-0.04em]"
        >
          Add-ons
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {PRICE.addons.map((a, i) => (
            <div key={a.term} data-rise style={{ "--d": `${60 + i * 50}ms` }}>
              <h3 className="text-[16px] font-bold tracking-[-0.01em]">
                {a.term}
              </h3>
              <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.55]">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <figure data-rise className="mt-24 md:mt-32">
        <div data-rise className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {FRAMES.map((w, i) => (
            <img
              key={w.title}
              data-rise
              style={{ "--d": `${60 + i * 60}ms` }}
              src={w.img}
              alt={w.alt}
              width="1200"
              height="1500"
              className="aspect-[4/5] w-full object-cover"
            />
          ))}
          <div
            data-rise
            style={{ "--d": "300ms" }}
            className="loop-media relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={HERO_VIDEO.poster}
              alt=""
              width="1280"
              height="720"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <video
              src={HERO_VIDEO.src}
              poster={HERO_VIDEO.poster}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
          </div>
        </div>
        <figcaption
          data-rise
          style={{ "--d": "340ms" }}
          className="mt-3 max-w-[70ch] text-[16px] text-soft"
        >
          Frames: {FRAMES.map((w) => w.title).join(", ")} · loop: the studio’s
          monochrome grain — “E Ink Screen updating” by Alexander Gee, CC BY-SA
          4.0
        </figcaption>
      </figure>

      <p data-rise className="mt-12 text-[16px] text-soft md:mt-16">
        Rates for 2026: confirm current availability before booking.
      </p>
    </section>
  );
}
